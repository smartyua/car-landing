// @flow

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import HeadRoom from 'react-headroom';
import * as Scroll from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';

import styles from './header.module.scss';
import languageChange from '../../store/actions/common';
import translation from '../../translate';
import { languages } from '../../../config';
import LogoIcon from '../../assets/img/logo.png';
import Button from '../Button';

import {
  Ukraine,
  Germany,
  Belarus,
  Poland,
  Russia,
  USA,
  China,
  Spain,
  France
} from '../../../flags';

const languageIcons = {
  en: USA,
  ua: Ukraine,
  de: Germany,
  pl: Poland,
  be: Belarus,
  ru: Russia,
  es: Spain,
  fr: France,
  zh: China
};

const scrollOption = {
  duration: 200,
  delay: 50,
  smooth: true
};

const handleScrollClick = () => scroll.scrollToTop(scrollOption);

const isServer = typeof window === 'undefined';

const Header = (props: any): any => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const { location } = props;
  const wnd = isServer ? {} : window;
  const pathname =
    _.get(location, 'pathname') || _.get(wnd, 'location.pathname');

  const { language } = useSelector(({ common: comm }: any) => comm);
  const currLanguage = languages.filter(lng => language === lng)[0] || 'en';

  const menuItems = [
    {
      title: 'DODGE',
      link: 'dodge'
    }
    // {
    //   title: 'MUSTANG',
    //   link: 'mustang'
    // },
    // {
    //   title: 'CAMARO',
    //   link: 'camaro'
    // },
    // {
    //   title: 'CORVETTE',
    //   link: 'corvette'
    // }
  ];

  if (pathname === '/404page') {
    // defaultStyle = styles.mainBodyError;
    // errorHeader = true;
  } else {
    // defaultStyle = styles.mainBody;
  }

  // // if (isFulfilled) {
  // return (
  //   <div className={styles.headerBody}>
  //     {!errorHeader && this.renderHeader()}
  //     <div className={defaultStyle}>
  //       {errorHeader && this.renderHeader()}
  //       {children}
  //     </div>
  //   </div>
  // );

  const headerLink = language && language !== 'en' ? `/${language}/` : '/';

  return (
    <div>
      <div className={styles.topBar} onClick={handleScrollClick}>
        <div className={styles.arrow} onClick={handleScrollClick} />
      </div>
      <HeadRoom
        pinStart={30}
        className={styles.headroom}
        style={{
          transition: 'all 1s ease-in-out'
        }}
      >
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <header className={styles.header}>
              <Link
                rel="canonical"
                to={headerLink}
                className={styles.logo}
                onClick={() =>
                  Scroll.animateScroll.scrollToTop({ duration: 100 })
                }
              >
                <img
                  src={LogoIcon}
                  className={styles.logoIcon}
                  alt="Cars from USA"
                />
              </Link>
              <div className={styles.contactButton}>
                <span
                  onClick={(event: any) => {
                    window.location = 'mailto:smartyua@gmail.com';
                    event.preventDefault();
                  }}
                >
                  <Button>{translation('_HOME_CONTACT', language)}</Button>
                </span>
              </div>

              <div className={styles.languageBlock}>
                <span>{currLanguage.toUpperCase()}</span>
                <ul className={styles.languages}>
                  {languages.map(lng => {
                    const FlagIcon = languageIcons[lng];
                    return (
                      <li
                        key={lng}
                        className={lng === language ? styles.active : ''}
                        onClick={() => {
                          // handleUrlChange(lng);
                          const { pathname: currentUrl } = currentLocation;
                          const newUrl = currentUrl.replace(
                            `/${language}/`,
                            `/${lng}/`
                          );

                          dispatch(languageChange(lng));
                          navigate(newUrl);
                        }}
                      >
                        <FlagIcon className={styles.flagIcon} />
                        {lng.toUpperCase()}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className={styles.menuItems}>
                {menuItems.map(({ link, title }) => {
                  const isActive =
                    (pathname || '').indexOf(`/${link}`) > 0
                      ? styles.active
                      : '';

                  return (
                    <li key={title} className={isActive}>
                      <Link
                        to={`${language}/${link}`}
                        onClick={() =>
                          Scroll.animateScroll.scrollToTop({ duration: 100 })
                        }
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </header>
          </div>
        </div>
      </HeadRoom>
    </div>
  );
};

export default Header;
