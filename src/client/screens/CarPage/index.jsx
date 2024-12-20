// @flow

import React from 'react';
import { useParams } from 'react-router-dom';
// import * as Scroll from 'react-scroll';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// import Button from '../../components/Button';
import Section from '../../components/Section';
import styles from './car.module.scss';
import metaValues from '../../../config';
import translation from '../../translate';

const scrollOption = {
  duration: 50,
  delay: 10,
  smooth: true
};

// $FlowFixMe

const handleScrollClick = () => scroll.scrollToTop(scrollOption);

const CarScreen = (): any => {
  const params = useParams();
  const { brand = 'default' } = params;
  const { defaultTitle, globalSEO, popularCarBrands } = metaValues;
  const { language } = useSelector(({ common }: any) => common);
  const { title, headTitle, description, models } =
    _.get(globalSEO, brand) || _.get(globalSEO, 'default');

  const descriptionText = description[language];
  const kwText = models
    .reduce((acc, item) => {
      const { keywords } =
        item && item[language] ? item[language] : { keywords: [] };
      return [].concat(acc, keywords);
    }, [])
    .flat()
    .filter(x => !!x);

  const modelInfo = models.find(x => x.slug === params.slug);
  const model = modelInfo[language];
  const parameters = JSON.stringify(params, null, 2);
  const keywordsText = Array.from(new Set([...kwText]));
  const brandInfo = popularCarBrands.find(x => x.slug === brand);
  const imageStyle =
    brandInfo && brandInfo.image ? styles[brandInfo.image] : '';

  return (
    <section>
      <Helmet>
        <title>
          {title} - {model.title} - {headTitle} - {defaultTitle}
        </title>
        <meta name="description" content={descriptionText} />
        <meta property="keywords" content={keywordsText} />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`${metaValues.domain}/public/javascript.svg`}
        />
      </Helmet>

      {brandInfo && brandInfo.image && (
        <Section fullwidth={true} className={styles.head}>
          <div className={imageStyle}>
            <h1>{title}</h1>
          </div>
        </Section>
      )}

      <Section className={styles.content}>
        <Link to={`/${language}/${String(brand)}`} onClick={handleScrollClick}>
          {translation('_BACK', language)} {title}
        </Link>
        &nbsp;→&nbsp;{model.title}
        <div>{parameters}</div>
        <h1>{model.title}</h1>
        <div>{model.description}</div>
      </Section>
    </section>
  );
};

export default CarScreen;
