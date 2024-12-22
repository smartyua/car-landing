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
  const { pathname } = location;

  const heart = (
    <span role="img" className={styles.emojii} aria-label="Heart">
      ❤️
    </span>
  );

  const { popularCarBrands, globalSEO, languages, languageTitles } =
    configValues;
  const cols = 3;
  const rows = Math.ceil(popularCarBrands.length / cols);
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(null));
  let index = 0;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (index < popularCarBrands.length) {
        matrix[row][col] = popularCarBrands[index] || null;
        index++;
      }
    }
  }

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brands}>
          <div className={styles.list}>
            {matrix
              .filter(x => !!x)
              .map((row, i) => (
                <div key={i} className={styles.row}>
                  {row.map((brand, j) => {
                    if (!brand) {
                      return null;
                    }

                    const { models } = globalSEO[brand.slug];
                    const modelsText = models
                      .map(x =>
                        x[language] && x[language].title
                          ? x[language].title
                          : null
                      )
                      .filter(x => !!x);

                    const link = `/${language}/${brand.slug}`;
                    return (
                      <div key={j} className={styles.brand}>
                        <div className={styles.brandTitle}>
                          <Link to={link} onClick={handleScrollClick}>
                            {brand.title}
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
