import _ from 'lodash';
import React from 'react';
import styles from './input.module.scss';

type Props = {|
  type: string,
  tip?: string,
  name?: string,
  value?: string,
  // eslint-disable-next-line react/require-default-props
  fullWidth?: boolean,
  className?: string,
  placeholder: string,
  hasError?: boolean,
  onChange?: any
|};

const Input = (props: Props): any => {
  const {
    hasError,
    onChange,
    tip,
    name,
    value,
    className = '',
    fullWidth
  } = props;

  const fullWidthStyle = fullWidth ? styles.fullWidth : '';

  const styleName =
    `${styles.inputGroup} ${className} ${fullWidthStyle}`.trim();

  return (
    <div className={styleName}>
      <input
        {..._.omit(props, ['onChange', 'hasError', 'fullWidth'])}
        className={hasError ? styles.hasError : ''}
        id={name}
        value={value}
        onChange={onChange}
      />
      {tip && <div className={styles.inputTip}>{tip}</div>}
    </div>
  );
};

Input.defaultProps = {
  tip: '',
  value: '',
  className: '',
  name: '',
  fullWidth: false,
  hasError: false,
  onChange: () => {}
};

export default Input;
