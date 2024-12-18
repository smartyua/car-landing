// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';
import configValues from '../../../config';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

const scrollOption = {
  duration: 50,
  delay: 10,
  smooth: true
};

const handleScrollClick = () => scroll.scrollToTop(scrollOption);

const Footer = (): any => {
  const { language } = useSelector(({ common: comm }: any) => comm);

  const heart = (
    <span role="img" className={styles.emojii} aria-label="Heart">
      ❤️
    </span>
  );

  const { popularCarBrands } = configValues;
  const cols = 3;
  const rows = Math.ceil(popularCarBrands.length / cols);
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(null));
  let index = 0;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (index < popularCarBrands.length) {
        matrix[row][col] = popularCarBrands[index];
        index++;
      }
    }
  }

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brands}>
          <h2>Popular car brands:</h2>
          <div className={styles.list}>
            {matrix.map((row, i) => (
              <div key={i} className={styles.row}>
                {row.map((brand, j) => {
                  const link = `/${language}/${brand.title.toLowerCase()}`;
                  return (
                    <div key={j} className={styles.brand}>
                      <div className={styles.brandTitle}>
                        <Link to={link} onClick={handleScrollClick}>
                          {brand.title}
                        </Link>
                      </div>
                      <div className={styles.models}>
                        {brand.models.join(', ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

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
