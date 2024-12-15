import React from 'react';
import { Link } from 'react-router-dom';

import styles from './page404.module.scss';

const Page404 = () => (
  <div className={styles.page404}>
    <div className={styles.texts}>
      <h1>Page Not Found</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.error404page}>
        <Link to="/">
          <div className={styles.newcharacter404}>
            <div className={styles.chair404} />
            <div className={styles.leftshoe404} />
            <div className={styles.rightshoe404} />
            <div className={styles.legs404} />
            <div className={styles.torso404}>
              <div className={styles.body404} />
              <div className={styles.leftarm404} />
              <div className={styles.rightarm404} />
              <div className={styles.head404}>
                <div className={styles.eyes404} />
              </div>
            </div>
            <div className={styles.laptop404} />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Page404;
