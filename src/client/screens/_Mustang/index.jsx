// @flow

import React from 'react';
// import { Link } from 'react-router-dom';
// import * as Scroll from 'react-scroll';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// import Button from '../../components/Button';
import Section from '../../components/Section';
import styles from './mustang.module.scss';

// $FlowFixMe
import metaValues from '../../../config';
import translation from '../../translate';

const HomeScreen = (): any => {
  const { defaultTitle, defaultKeywords } = metaValues;
  const { language } = useSelector(({ common }: any) => common);

  const title = `${translation('_SEO_TITLE', language)} - ${defaultTitle}`;
  const keywords = defaultKeywords[language];

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

      <Section fullwidth={true} className={styles.head}>
        <div className={styles.headImage}>
          <h1>Mustang</h1>
          <h2>Exclusive muscle cars</h2>
        </div>
      </Section>

      <Section>
        <div className={styles.content}>Some text about Mustang cars</div>
      </Section>
    </section>
  );
};

export default HomeScreen;
