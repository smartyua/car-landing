// @flow
import React from 'react';
import styles from './section.module.scss';
import css from '../../app.module.scss';

type Props = {
  children?: any,
  className?: string,
  style?: any,
  fullwidth?: boolean,
  marginTop?: boolean
};

const renderSection = (props: Props): any => {
  const {
    children = '',
    style,
    fullwidth,
    className = '',
    marginTop = false
  } = props;

  const fullWidthStyle = fullwidth ? css.mainBodyFull : styles.section;
  const isMarginTop = marginTop ? styles.marginTop : '';
  const cssStyle = `${isMarginTop} ${fullWidthStyle} ${className}`.trim();

  return (
    <div className={cssStyle} style={style}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default renderSection;
