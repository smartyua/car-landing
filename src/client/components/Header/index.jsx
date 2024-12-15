// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import HeadRoom from 'react-headroom';
import * as Scroll from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';

import styles from './header.module.scss';
import languageChange from '../../store/actions/common';
import translation from '../../translate';
import LogoIcon from '../../assets/img/logo.png';
import Button from '../Button';

const scrollOption = {
  duration: 200,
  delay: 50,
  smooth: true
};

const handleScrollClick = () => scroll.scrollToTop(scrollOption);

// const languages = ['en', 'ua', 'de', 'pl'];
const languages = ['en', 'be', 'ua', 'pl', 'de', 'ru'];

const isServer = typeof window === 'undefined';

const handleUrlChange = (lng: string) => {
  if (!isServer) {
    const { pathname } = window.location;

    if (pathname === '/') {
      window.history.pushState({}, '', `/${lng}/`);
    } else {
      const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lng}`);
      window.history.pushState({}, '', newPathname);
    }
  }
};

const Header = (props: any): any => {
  const dispatch = useDispatch();

  const { location } = props;
  const pathname = _.get(location, 'pathname');
  // let defaultStyle;
  // let errorHeader;

  const { language } = useSelector(({ common: comm }: any) => comm);

  const currLanguage = languages.filter(lng => language === lng)[0] || 'en';

  // const menuItems = [
  //   {
  //     title: translation('_HOME_LINK1', language),
  //     link: 'expertise'
  //   }
  // ];

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
          transition: 'all 0.5s ease-in-out'
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
                  alt="React applications development Kylypko Grygorii"
                />
                {/* <LogoIcon className={styles.logoIcon} /> */}
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
                  {languages.map(lng => (
                    <li
                      key={lng}
                      className={lng === language ? styles.active : ''}
                      onClick={() => {
                        handleUrlChange(lng);
                        dispatch(languageChange(lng));
                      }}
                    >
                      {lng.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
              {/*
              <ul className={styles.menuItems}>
                {menuItems.map(({ link, title }) => (
                  <li key={title}>
                    <Link
                      to={`${language}/${link}`}
                      onClick={() =>
                        Scroll.animateScroll.scrollToTop({ duration: 100 })
                      }
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              */}
            </header>
          </div>
        </div>
      </HeadRoom>
    </div>
  );
};

export default Header;
