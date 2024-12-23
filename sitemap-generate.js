// eslint-disable-next-line no-undef
const fs = require('fs');
const seo = {};

const languages = ['en', 'be', 'ua', 'pl', 'de', 'ru', 'es', 'zh', 'fr'];
const domain = 'https://www.auto-usa.pro';

const file = [
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'
];

const addUrl = (url, priority = '1.00') => {
  file.push(`  <url>`);
  file.push(`    <loc>${url}</loc>`);
  file.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
  file.push(`    <priority>${priority}</priority>`);
  file.push('  </url>');
};

fs.readdirSync('./src/seo')
  .filter(x => x.includes('.json'))
  .filter(x => !!x)
  .map(file => {
    const data = JSON.parse(fs.readFileSync(`./src/seo/${file}`, 'utf8'));
    const { slug } = data;
    seo[slug] = data;
  });

languages.forEach(lang => {
  const url = `${domain}/${lang}/`;
  addUrl(url);
});

Object.keys(seo).forEach(key => {
  const data = seo[key];
  const { slug, models } = data;
  languages.forEach(lang => {
    const url = `${domain}/${lang}/${slug}`;
    addUrl(url, '0.8');
  });

  if (models) {
    models.forEach(model => {
      const { slug } = model;
      const base = `/${key}/${slug}`;
      languages.forEach(lang => {
        const url = `${domain}/${lang}${base}`;
        addUrl(url, '0.6');
      });
    });
  }
});

file.push('</urlset>');
file.push('</urlset>');

fs.writeFileSync('./public/sitemap.xml', file.join('\n'));
