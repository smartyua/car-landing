// @flow

import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import * as Scroll from 'react-scroll';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// import Button from '../../components/Button';
import Section from '../../components/Section';
import styles from './brand.module.scss';

// $FlowFixMe
import metaValues from '../../../config';

const scrollOption = {
  duration: 50,
  delay: 10,
  smooth: true
};

const handleScrollClick = () => scroll.scrollToTop(scrollOption);

const BrandScreen = (): any => {
  const navigate = useNavigate();

  const params = useParams();
  const { brand = 'default' } = params;
  const { defaultTitle, globalSEO, popularCarBrands } = metaValues;
  const { language } = useSelector(({ common }: any) => common);
  const { title, headTitle, description } =
    _.get(globalSEO, brand) || _.get(globalSEO, 'default');

  const models =
    globalSEO[brand] && globalSEO[brand].models ? globalSEO[brand].models : [];

  useEffect(() => {
    if (!models.length) {
      return navigate('/404');
    }
  });

  const brandInfo = popularCarBrands.find(x => x.slug === brand);
  const descriptionText = description[language];
  const kwText = models
    // $FlowFixMe
    .reduce((acc, item) => {
      const { keywords } =
        item && item[language] ? item[language] : { keywords: [] };
      return [].concat(acc, keywords);
    }, [])
    .flat()
    .filter(x => !!x);

  const keywordsText = Array.from(new Set([...kwText]));
  const imageStyle =
    brandInfo && brandInfo.image ? styles[brandInfo.image] : '';

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

      {brandInfo && brandInfo.image && (
        <Section fullwidth={true} className={styles.head}>
          <div className={imageStyle}>
            <h1>{title}</h1>
          </div>
        </Section>
      )}

      <Section>
        <div className={styles.content}>
          {brandInfo && !brandInfo.image && <h1>{brandInfo.title}</h1>}
          <div className={styles.text}>{descriptionText}</div>

          {models.length > 0 && (
            <div className={styles.models}>
              {models.map((model, i) => {
                if (!model[language].title) {
                  return null;
                }

                const { slug } = model;
                const link = `/${language}/${String(brand)}/${slug}`;

                return (
                  <div key={i} className={styles.model}>
                    <h3>
                      <Link to={link} onClick={handleScrollClick}>
                        {model[language].title}
                      </Link>
                    </h3>
                    <div className={styles.text}>
                      {model[language].description}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Section>
    </section>
  );
};

export default BrandScreen;
