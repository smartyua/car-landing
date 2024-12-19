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
import bmwSeo from './../../../seo/BMW_seo_data.json';

const globelSEO = {
  bmw: bmwSeo,
  default: bmwSeo,
  hyundai: bmwSeo
};

const BrandScreen = (): any => {
  const params = useParams();
  const { brand = 'default' } = params;
  const { defaultTitle } = metaValues;
  const { language } = useSelector(({ common }: any) => common);
  const { title, description, models } =
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
          {title} - {defaultTitle}
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
