// @flow
import * as React from 'react';
// import { Link } from 'react-router-dom';

import styles from './footer.module.scss';

const Footer = (): any => {
  const heart = (
    <span role="img" className={styles.emojii} aria-label="Heart">
      ❤️
    </span>
  );

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.title}>
          Made with
          {heart}
          &nbsp;in&nbsp;
          <a
            onClick={() => window.open('https://www.reactapp.top', '_blank')}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.reactapp.top"
          >
            Kharkiv
          </a>
          , Ukraine &copy; 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
