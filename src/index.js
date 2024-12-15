/* global module, require, process */
const express = require('express');

let app = require('./server').default;

if (module && module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading: ./server...');
    try {
      // eslint-disable-next-line global-require
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });

  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 8080;
const application = express()
  .use((req, res) => app.handle(req, res))
  .listen(port, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`✅  Started on port: ${port} (http://localhost:${port})`);
  });

export default application;
