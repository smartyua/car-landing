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

const renderAdvantages = (advantages: any, language: string) => {
  return (
    <div>
      <h2>{translation('_ADVANTAGES', language)}</h2>
      <ul>
        {advantages.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const renderCompetitors = (params: any): any => {
  const { competitors = [], language } = params;
  const { globalSEO } = metaValues;
  const found = [];

  Object.keys(globalSEO).forEach(brand => {
    const { models } = globalSEO[brand];
    const modelSearch = models.find(
      x => x[language] && competitors.includes(x[language].title)
    );

    if (modelSearch) {
      found.push({
        language,
        brand,
        slug: modelSearch.slug,
        model: modelSearch[language].title
      });
    }
  });

  return (
    <div>
      <h2>{translation('_COMPETITORS', language)}</h2>
      <ul>
        {competitors.map(item => {
          const foundItem = found.find(x => x.model === item);

          if (!foundItem) {
            return <li key={item}>{item}</li>;
          }

          const link = `/${language}/${foundItem.brand}/${foundItem.slug}`;

          return (
            <li key={item}>
              <Link to={link} onClick={handleScrollClick}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CarScreen = (): any => {
  const params = useParams();
  const { brand = 'default' } = params;
  const { defaultTitle, globalSEO } = metaValues;
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
  const keywordsText = Array.from(new Set([...kwText]));
  // const brandInfo = popularCarBrands.find(x => x.slug === brand);
  // const imageStyle =
  //   brandInfo && brandInfo.image ? styles[brandInfo.image] : '';

  return (
    <section>
      <Helmet>
        <title>
          {title} - {model.title} - {headTitle[language]} - {defaultTitle}
        </title>
        <meta name="description" content={descriptionText} />
        <meta property="keywords" content={keywordsText} />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`${metaValues.domain}/public/javascript.svg`}
        />
      </Helmet>

      {/* brandInfo && brandInfo.image && (
        <Section fullwidth={true} className={styles.head}>
          <div className={imageStyle}>
            <h1>{title}</h1>
          </div>
        </Section>
      ) */}

      <Section className={styles.content}>
        <Link to={`/${language}/${String(brand)}`} onClick={handleScrollClick}>
          {translation('_BACK', language)} {title}
        </Link>
        &nbsp;→&nbsp;{model.title}
        <h1>{model.title}</h1>
        {model.head && <h3>{model.head}</h3>}
        {!model.text && <div>{model.description}</div>}
        {model.text && <div>{model.text}</div>}
        {model.advantages && renderAdvantages(model.advantages, language)}
        {modelInfo.competitors &&
          renderCompetitors({
            competitors: modelInfo.competitors,
            language,
            model: model.title
          })}
      </Section>
    </section>
  );
};

export default CarScreen;
