// @flow

import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as Scroll from 'react-scroll';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// import Button from '../../components/Button';
import Section from '../../components/Section';
import Button from '../../components/Button';
import styles from './home.module.scss';

// $FlowFixMe
import metaValues from '../../../config';
import translation from '../../translate';
import Rav4 from '../../assets/img/toyota_rav4.png';
import Prius from '../../assets/img/toyota_prius.png';

const items = [
  {
    price: '15,000',
    title: '2025 RAV4 Hybrid',
    image: Rav4,
    text: 'RAV4 Hybrid produces an ample 219 net combined horsepower for impressive acceleration all the way to highway speeds. And with an up to 39 EPA-estimated combined mpg rating, * you can take the scenic route.'
  },
  {
    price: '12,200',
    title: '2021 RAV4 Hybrid',
    image: Rav4,
    text: 'RAV4 Hybrid produces an ample 219 net combined horsepower for impressive acceleration all the way to highway speeds. And with an up to 39 EPA-estimated combined mpg rating, * you can take the scenic route.'
  },
  {
    price: '7,000',
    title: '2017 Prius Hybrid',
    image: Prius,
    text: "The 2024 Toyota Prius boasts stellar mpg — more than 50 mpg in real-world driving, most likely — but it's no longer the only reason to buy a Prius. It's also enjoyable to drive and fitted with many helpful features. The car's main downsides are mediocre utility and rear passenger comfort."
  }
];

const renderPromos = (itemId: number) => (
  <Section className={styles.center} fullwidth>
    <Section className={styles.red} />
    <Section className={styles.gray} />
    {items.map((item, index) => {
      const { price, title, image, text } = item;
      const itemStyle = itemId === index ? styles.visible : styles.notVisible;
      return (
        <div key={index} className={itemStyle}>
          <div className={styles.price}>{price}</div>
          <Section className={styles.main}>
            <div className={styles.grid}>
              <div>
                <img src={image} className={styles.centerImage} alt={title} />
              </div>
              <div className={styles.textBlock}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          </Section>
        </div>
      );
    })}
  </Section>
);

// const scroll = Scroll.animateScroll;

const HomeScreen = (): any => {
  const { defaultTitle, defaultKeywords } = metaValues;
  const { language } = useSelector(({ common }: any) => common);

  const title = `${translation('_SEO_TITLE', language)} - ${defaultTitle}`;
  const keywords = defaultKeywords[language];
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = promoIndex === items.length - 1 ? 0 : promoIndex + 1;
      setPromoIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={translation('_SEO_DESCRIPTION', language)}
        />
        <meta property="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`${metaValues.domain}/public/javascript.svg`}
        />
      </Helmet>

      <Section>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div>
              <h1>{translation('_HOME_TITLE1', language)}</h1>
              <h2>{translation('_HOME_TITLE2', language)}</h2>
              <h3>{translation('_HOME_TITLE3', language)}</h3>

              <div className={styles.text}>
                {translation('_HOME_TEXT', language)}
              </div>

              <Button type="arrow">
                {translation('_HOME_BUTTON', language)}
              </Button>
            </div>
          </div>

          <div className={styles.text}>
            {translation('_HOME_BIG_TEXT1', language)}
          </div>
        </div>
      </Section>

      <div className={styles.promo}>
        <Section>
          <center>
            <h1>
              SPECIAL PROPOSALS
              <span>
                ({promoIndex + 1}/{items.length})
              </span>
            </h1>
          </center>
        </Section>
        {renderPromos(promoIndex)}
      </div>

      <hr className={styles.break} />

      <Section>
        <div className={styles.content}>
          <div className={styles.text}>
            {translation('_HOME_BIG_TEXT2', language)}
          </div>

          <h2>{translation('_HOME_BIG_TITLE1', language)}</h2>
          <div className={styles.text}>
            {translation('_HOME_BIG_TEXT3', language)}
          </div>

          <div className={styles.list}>
            {(translation('_HOME_BIG_TEXT4', language) || []).map(item => (
              <li key={item}>{item}</li>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
};

export default HomeScreen;
