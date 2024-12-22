import audiSeo from './seo/audi.json';
import bmwSeo from './seo/bmw.json';
import chevroletSeo from './seo/chevrolet.json';
import dodgeSeo from './seo/dodge.json';
import fordSeo from './seo/ford.json';
import hondaSeo from './seo/honda.json';
import hyundaiSeo from './seo/hyundai.json';
import jeepSeo from './seo/jeep.json';
import kiaSeo from './seo/kia.json';
import lexusSeo from './seo/lexus.json';
import mercedesSeo from './seo/mercedes-benz.json';
import nissanSeo from './seo/nissan.json';
import subaruSeo from './seo/subaru.json';
import teslaSeo from './seo/tesla.json';
import toyotaSeo from './seo/toyota.json';
import volkswagenSeo from './seo/volkswagen.json';
import byd from './seo/byd.json';
import nio from './seo/nio.json';
import xpeng from './seo/xpeng.json';
import porsche from './seo/porsche.json';
import geely from './seo/geely.json';
import rivian from './seo/rivian.json';
import jaguar from './seo/jaguar.json';
import volvo from './seo/volvo.json';
import lucid from './seo/lucid.json';
import liAutoXiang from './seo/li-auto-li-xiang.json';

const globalSEO = {
  audi: audiSeo,
  byd,
  xpeng,
  porsche,
  nio,
  lucid,
  geely,
  jaguar,
  rivian,
  'li-auto-li-xiang': liAutoXiang,
  bmw: bmwSeo,
  chevrolet: chevroletSeo,
  dodge: dodgeSeo,
  ford: fordSeo,
  honda: hondaSeo,
  hyundai: hyundaiSeo,
  kia: kiaSeo,
  jeep: jeepSeo,
  lexus: lexusSeo,
  mercedesbenz: mercedesSeo,
  nissan: nissanSeo,
  subaru: subaruSeo,
  tesla: teslaSeo,
  toyota: toyotaSeo,
  volvo,
  volkswagen: volkswagenSeo
};

const values = {
  languages: ['en', 'be', 'ua', 'pl', 'de', 'ru', 'es', 'zh', 'fr'],
  languageTitles: {
    en: 'English',
    be: 'Беларуская',
    ua: 'Українська',
    pl: 'Polski',
    de: 'Deutsch',
    ru: 'Русский',
    es: 'Español',
    zh: '中文',
    fr: 'Français'
  },

  domain: 'https://www.kylypko.com',
  defaultTitle: 'DASAUTO.COM',
  globalSEO,

  defaultKeywords: {
    ru: 'авто из США, доставка авто из США, покупка авто из Америки, машины из США под ключ, дешевые авто из США, американские авто в Польшу, таможня авто из США, авто из США в Варшаву, купить автомобиль с аукциона США, автомобиль из США доставка',
    pl: 'auta z USA, dostawa aut z USA, zakup auta z Ameryki, samochody z USA pod klucz, tanie auta z USA, amerykańskie auta do Polski, odprawa celna aut z USA, auta z USA do Warszawy, kupno samochodu z aukcji w USA, samochody z USA dostawa',
    de: 'Autos aus den USA, Autolieferung aus den USA, Autokauf aus Amerika, Autos aus den USA schlüsselfertig, günstige Autos aus den USA, amerikanische Autos nach Polen, Zollabfertigung von Autos aus den USA, Autos aus den USA nach Warschau, Autokauf von US-Auktionen, Lieferung von Autos aus den USA',
    uk: 'авто зі США, доставка авто зі США, купівля авто з Америки, машини зі США під ключ, дешеві авто зі США, американські авто в Польщу, розмитнення авто зі США, авто зі США до Варшави, купити автомобіль з аукціону США, автомобіль зі США доставка',
    be: 'аўто з ЗША, дастаўка аўто з ЗША, купля аўто з Амерыкі, машыны з ЗША пад ключ, танныя аўто з ЗША, амерыканскія аўто ў Польшчу, мытня аўто з ЗША, аўто з ЗША ў Варшаву, купіць аўтамабіль з аўкцыёну ЗША, аўтамабіль з ЗША дастаўка',
    en: 'cars from the USA, car delivery from the USA, car purchase from America, cars from the USA turnkey, cheap cars from the USA, American cars to Poland, customs clearance for cars from the USA, cars from the USA to Warsaw, buy a car from US auctions, car delivery from the USA',
    es: 'coche de EE.UU., la entrega de coches de EE.UU., la compra de un coche de EE.UU., coches llave en mano de EE.UU., coches baratos de EE.UU., coches americanos a Polonia, las costumbres de coches de EE.UU., coche de EE.UU. a Varsovia, comprar un coche de EE.UU. subasta, coche de EE.UU. entrega',
    zh: '美国汽车，美国汽车交付，从美国购买汽车，美国汽车交钥匙，廉价汽车从美国，美国汽国汽车到波兰，美国汽车清关，美国汽车到华沙，从美国拍卖购买汽车，美国汽车交付',
    fr: "voitures des États-Unis, livraison de voitures des États-Unis, achat de voitures d'Amérique, voitures des États-Unis clés en main, voitures bon marché des États-Unis, voitures américaines en Pologne, dédouanement de voitures des États-Unis, voitures des États-Unis à Varsovie, acheter une voiture aux enchères américaines, livraison de voitures des États-Unis"
  }
};

export const languages = values.languages;
export const languageTitles = values.languageTitles;

export default values;
