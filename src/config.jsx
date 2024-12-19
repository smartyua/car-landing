import audiSeo from './seo/Audi_seo_data.json';
import bmwSeo from './seo/BMW_seo_data.json';
import chevroletSeo from './seo/Chevrolet_seo_data.json';
import dodgeSeo from './seo/Dodge_seo_data.json';
import fordSeo from './seo/Ford_seo_data.json';
import hondaSeo from './seo/Honda_seo_data.json';
import hyundaiSeo from './seo/Hyundai_seo_data.json';
import jeepSeo from './seo/Jeep_seo_data.json';
import kiaSeo from './seo/Kia_seo_data.json';
import lexusSeo from './seo/Lexus_seo_data.json';
import mercedesSeo from './seo/MercedesBenz_seo_data.json';
import nissanSeo from './seo/Nissan_seo_data.json';
import subaruSeo from './seo/Subaru_seo_data.json';
import teslaSeo from './seo/Tesla_seo_data.json';
import toyotaSeo from './seo/Toyota_seo_data.json';
import volkswagenSeo from './seo/Volkswagen_seo_data.json';

const globalSEO = {
  default: bmwSeo,
  audi: audiSeo,
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
  volkswagen: volkswagenSeo
};

const values = {
  domain: 'https://www.kylypko.com',
  defaultTitle: 'DASAUTO.COM',
  globalSEO,

  defaultKeywords: {
    ru: 'авто из США, доставка авто из США, покупка авто из Америки, машины из США под ключ, дешевые авто из США, американские авто в Польшу, таможня авто из США, авто из США в Варшаву, купить автомобиль с аукциона США, автомобиль из США доставка',
    pl: 'auta z USA, dostawa aut z USA, zakup auta z Ameryki, samochody z USA pod klucz, tanie auta z USA, amerykańskie auta do Polski, odprawa celna aut z USA, auta z USA do Warszawy, kupno samochodu z aukcji w USA, samochody z USA dostawa',
    de: 'Autos aus den USA, Autolieferung aus den USA, Autokauf aus Amerika, Autos aus den USA schlüsselfertig, günstige Autos aus den USA, amerikanische Autos nach Polen, Zollabfertigung von Autos aus den USA, Autos aus den USA nach Warschau, Autokauf von US-Auktionen, Lieferung von Autos aus den USA',
    uk: 'авто зі США, доставка авто зі США, купівля авто з Америки, машини зі США під ключ, дешеві авто зі США, американські авто в Польщу, розмитнення авто зі США, авто зі США до Варшави, купити автомобіль з аукціону США, автомобіль зі США доставка',
    be: 'аўто з ЗША, дастаўка аўто з ЗША, купля аўто з Амерыкі, машыны з ЗША пад ключ, танныя аўто з ЗША, амерыканскія аўто ў Польшчу, мытня аўто з ЗША, аўто з ЗША ў Варшаву, купіць аўтамабіль з аўкцыёну ЗША, аўтамабіль з ЗША дастаўка',
    en: 'cars from the USA, car delivery from the USA, car purchase from America, cars from the USA turnkey, cheap cars from the USA, American cars to Poland, customs clearance for cars from the USA, cars from the USA to Warsaw, buy a car from US auctions, car delivery from the USA'
  },

  popularCarBrands: [
    { title: 'Audi', models: ['A4', 'A6', 'Q5', 'Q7', 'A3', 'A5', 'Q3', 'Q8'] },
    { title: 'BMW', models: ['3 Series', '5 Series', 'X5', 'X3'] },
    { title: 'Chevrolet', models: ['Silverado', 'Malibu', 'Equinox', 'Tahoe'] },
    { title: 'Dodge', models: ['Charger', 'Challenger', 'Durango'] },
    { title: 'Ford', models: ['F-150', 'Explorer', 'Escape', 'Mustang'] },
    { title: 'Honda', models: ['Civic', 'Accord', 'CR-V', 'Pilot'] },
    { title: 'Hyundai', models: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe'] },
    { title: 'Jeep', models: ['Grand Cherokee', 'Wrangler', 'Cherokee'] },
    { title: 'Kia', models: ['Optima', 'Sorento', 'Sportage', 'Forte'] },
    { title: 'Lexus', models: ['RX', 'ES', 'NX', 'GX'] },
    { title: 'MercedesBenz', models: ['C-Class', 'E-Class', 'GLE', 'GLS'] },
    { title: 'Nissan', models: ['Altima', 'Rogue', 'Sentra', 'Pathfinder'] },
    {
      title: 'Subaru',
      models: ['Outback', 'Forester', 'Impreza', 'Crosstrek']
    },
    { title: 'Tesla', models: ['Model 3', 'Model S', 'Model X', 'Model Y'] },
    {
      title: 'Toyota',
      models: ['Camry', 'Corolla', 'RAV4', 'Tacoma', 'Highlander']
    },
    { title: 'Volkswagen', models: ['Jetta', 'Passat', 'Tiguan'] }
  ]
};

export default values;
