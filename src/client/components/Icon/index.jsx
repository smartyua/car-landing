/* global require, process */
// @flow
import * as React from 'react';
import styles from './icon.module.scss';

type Props = {
  glyph: string
};

// TODO: remove this hack for tests

if (process.env.NODE_ENV !== 'test') {
  const requireAll = (r: any) => r.keys().forEach(r);
  // $FlowFixMe
  requireAll(require.context('../../assets/img', true, /\.svg$/));
}

const Icon = ({ glyph }: Props): any => (
  <svg className={styles.icon}>
    <use xlinkHref={`#${glyph}`} />
  </svg>
);

export const LogoHeader = (): any => <Icon glyph="logo" />;
export const Menu = (): any => <Icon glyph="menu" />;

export default Icon;
