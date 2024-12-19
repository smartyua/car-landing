/* global require, process */
import React from 'react';
import express from 'express';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line import/extensions
import { StaticRouter } from 'react-router-dom/server.js';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import prettifyHtml from 'prettify-html';
import bodyParser from 'body-parser';

import metaValues from '../config';
import App from '../client/App';
import AppRoutes from '../client/routes';

import configureStore from '../client/store/configureStore';

const { match } = require('node-match-path');

dotenv.config();

// eslint-disable-next-line security/detect-non-literal-require, import/no-dynamic-require
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

const jsScriptTagsFromAssets = (assetsItems, entrypoint, extra = '') => {
  const items = assetsItems[entrypoint].js;
  const assetCondition = items
    ? items.map(asset => `<script src="${asset}"${extra}></script>`).join('')
    : '';

  return assetsItems[entrypoint] ? assetCondition : '';
};

export const renderApp = async req => {
  const { language = 'en' } = req;

  // TODO:  get initial state for components
  let preloadedState = {
    common: {
      language
    }
  };

  console.info('----------------------------');
  console.info(`✅  Server route: ${req.path}`);

  // FIXME: replace that with some other package
  // const branch = matchRoutes(Routes, req.path);

  let branch;

  AppRoutes.forEach(item => {
    const { path } = item;
    const matchResult = match(path, req.url);

    if (matchResult) {
      branch = item;
      return item;
    }

    return false;
  });

  if (branch) {
    const { element } = branch;

    if (element && element.fetchData) {
      const result = await element.fetchData({ branch, req });

      if (result) {
        preloadedState = {
          ...preloadedState,
          ...result
        };
      }
    }
  }

  // Create a new Redux store instance
  const store = configureStore(preloadedState);
  const context = {};

  const markup = prettifyHtml(
    renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState();
  const helmet = Helmet.renderStatic();
  const { title, meta } = helmet;
  const metaTags = meta
    .toComponent()
    .map(({ props }) => {
      let { content = '' } = props;
      const name = props.name || props.property;
      if (name === 'description' || name === 'og:description') {
        content = content.replace(/\n/g, ' ');
      }

      if (props.itemProp) {
        return `<meta itemProp="${props.itemProp}" content="${content}" />`;
      }

      return `<meta name="${
        props.name || props.property
      }" content="${content}" />`;
    })
    .join(`\n${' '.repeat(4)}`);

  const { defaultTitle } = metaValues;
  const isServer = typeof window === 'undefined';

  const googleBlock = isServer
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=G-QT8BQZJF1R" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-87HM69C51Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-87HM69C51Y');
</script>`
    : '';

  const html =
    // prettier-ignore
    `<!doctype html>
  <html lang="">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="google-site-verification" content="t9oJrBOJJjmKigW0_GpJonel6LQg_M7h4awWIpcd20k" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.kylypko.com${req.path}" />
    ${title ? title.toString() : `<title>${defaultTitle}</title>` }
    ${meta ? metaTags : metaValues }
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : '' }
    <link rel="shortcut icon" href="/public/favicon.png">
    <link rel="apple-touch-icon" href="/public/app-icon.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/public/app-icon-76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/public/app-icon-120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/public/app-icon-152.png">
  </head>
  <body>
    <div id="root">${markup}</div>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(finalState)}
    </script>
    ${jsScriptTagsFromAssets(assets, 'client', ' defer cross-origin')}
    ${googleBlock}
  </body>
</html>`;

  return { html, context };
};

console.info('----------------------------');
console.info(`✅  Public folder: ${process.env.RAZZLE_PUBLIC_DIR}`);

const options = {
  maxAge: '1m',
  etag: false
};

server
  .disable('x-powered-by')
  .use(bodyParser.json({ limit: '2Mb' }))
  .use('/public', express.static(process.env.RAZZLE_PUBLIC_DIR, options))
  .use('/public/static', express.static(process.env.RAZZLE_PUBLIC_DIR, options))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR, options))
  .use((req, res, next) => {
    res.set('Cache-control', 'public, max-age=3600');
    return next();
  })
  .get(`/:language?/*`, async (req, res) => {
    const { language } = req.params;
    req.language = language;

    const { html, context } = await renderApp(req, res);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(301, context.url);
    }

    return res.send(html);
  });
// .get('/*', async (req, res) => {
//   const { html, context } = await renderApp(req, res);

//   if (context.url) {
//     // Somewhere a `<Redirect>` was rendered
//     return res.redirect(301, context.url);
//   }

//   return res.send(html);
// });

export default server;
