// @flow

import React from 'react';
import { useParams } from 'react-router-dom';
// import * as Scroll from 'react-scroll';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// import Button from '../../components/Button';
import Section from '../../components/Section';
import styles from './brand.module.scss';

// $FlowFixMe
import metaValues from '../../../config';
import audiSeo from './../../../seo/Audi_seo_data.json';
import bmwSeo from './../../../seo/BMW_seo_data.json';
import chevroletSeo from './../../../seo/Chevrolet_seo_data.json';
import dodgeSeo from './../../../seo/Dodge_seo_data.json';
import fordSeo from './../../../seo/Ford_seo_data.json';
import hondaSeo from './../../../seo/Honda_seo_data.json';
import hyundaiSeo from './../../../seo/Hyundai_seo_data.json';
import jeepSeo from './../../../seo/Jeep_seo_data.json';
import kiaSeo from './../../../seo/Kia_seo_data.json';
import lexusSeo from './../../../seo/Lexus_seo_data.json';
import mercedesSeo from './../../../seo/MercedesBenz_seo_data.json';
import nissanSeo from './../../../seo/Nissan_seo_data.json';
import subaruSeo from './../../../seo/Subaru_seo_data.json';
import teslaSeo from './../../../seo/Tesla_seo_data.json';
import toyotaSeo from './../../../seo/Toyota_seo_data.json';
import volkswagenSeo from './../../../seo/Volkswagen_seo_data.json';

const globelSEO = {
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

const BrandScreen = (): any => {
  const params = useParams();
  const { brand = 'default' } = params;
  const { defaultTitle } = metaValues;
  const { language } = useSelector(({ common }: any) => common);
  const { title, headTitle, description, models } =
    _.get(globelSEO, brand) || _.get(globelSEO, 'default');

  const descriptionText = description[language];
  const kwText = models
    .reduce((acc, item) => {
      const { keywords } = item[language];
      return [].concat(acc, keywords);
    }, [])
    .flat();

  const keywordsText = Array.from(new Set([...kwText]));

  return (
    <section>
      <Helmet>
        <title>
          {title} - {headTitle} - {defaultTitle}
        </title>
        <meta name="description" content={descriptionText} />
        <meta property="keywords" content={keywordsText} />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`${metaValues.domain}/public/javascript.svg`}
        />
      </Helmet>

      <Section fullwidth={true} className={styles.head}>
        <div className={styles.headImage}>
          <h1>{title}</h1>
        </div>
      </Section>

      <Section>
        <div className={styles.content}>{descriptionText}</div>
      </Section>
    </section>
  );
};

export default BrandScreen;
