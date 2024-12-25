// @flow
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './footer.module.scss';
import configValues from '../../../config';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { useDispatch } from 'react-redux';
import languageChange from '../../store/actions/common';

const scrollOption = {
  duration: 50,
  delay: 10,
  smooth: true
};

const handleScrollClick = () => {
  scroll.scrollToTop(scrollOption);
};

const Footer = (): any => {
  const { language } = useSelector(({ common: comm }: any) => comm);
  const location = useLocation();
  const dispatch = useDispatch();
  let { pathname } = location;

  const heart = (
    <span role="img" className={styles.emojii} aria-label="Heart">
      ❤️
    </span>
  );

  const { globalSEO, languages, languageTitles } = configValues;
  const globalSEOKeys = Object.keys(globalSEO).sort();

  const cols = 3;
  const rows = Math.ceil(globalSEOKeys.length / cols);
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(null));
  let index = 0;

  const colsCells = [];

  for (let col = 0; col < cols; col++) {
    if (!colsCells[col]) {
      colsCells[col] = [];
    }

    for (let row = 0; row < rows; row++) {
      if (index < globalSEOKeys.length) {
        matrix[row][col] = globalSEOKeys[index] || null;
        // eslint-disable-next-line max-depth
        if (matrix[row][col]) {
          colsCells[col].push(matrix[row][col]);
        }

        index++;
      }
    }
  }

  if (pathname === '/') {
    pathname = `/${language}/`;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brands}>
          <div className={styles.table}>
            {colsCells.map(brands => (
              <div key={brands.join('')} className={styles.column}>
                {brands.map((brand, j) => {
                  if (!brand) {
                    return null;
                  }

                  const { models } = globalSEO[brand] || [];
                  const modelsText = models
                    // $FlowFixMe
                    .map(x =>
                      x[language] && x[language].title
                        ? x[language].title
                        : null
                    )
                    // $FlowFixMe
                    .filter(x => !!x);

                  const link = `/${language}/${globalSEO[brand].slug}`;
                  return (
                    <div key={j} className={styles.brand}>
                      <div className={styles.brandTitle}>
                        <Link to={link} onClick={handleScrollClick}>
                          {globalSEO[brand].title}
                        </Link>
                      </div>
                      <div className={styles.models}>
                        {modelsText.join(', ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.languages}>
          {languages.map(lng => {
            let langLocation = pathname.replace(`/${language}/`, `/${lng}/`);

            if (pathname === `/${language}`) {
              langLocation = `/${lng}`;
            }

            const current = lng === language;

            if (current) {
              return (
                <span key={lng} className={styles.current}>
                  {languageTitles[lng]}
                </span>
              );
            }

            return (
              <Link
                key={lng}
                to={langLocation}
                className={current ? styles.active : ''}
                onClick={() => {
                  dispatch(languageChange(lng));
                  handleScrollClick();
                }}
              >
                {languageTitles[lng].toUpperCase()}
              </Link>
            );
          })}
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
