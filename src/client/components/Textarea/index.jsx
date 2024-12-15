// @flow
import _ from 'lodash';
import React from 'react';
import styles from './textarea.module.scss';

type Props = {|
  placeholder?: string,
  value?: string,
  hasError?: boolean,
  onChange?: any
|};

const Textarea = (props: Props): any => {
  const { placeholder, value, onChange, hasError } = props;

  return (
    <div className={styles.content}>
      <textarea
        {..._.omit(props, ['onChange', 'hasError'])}
        placeholder={placeholder}
        className={hasError ? styles.hasError : ''}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Textarea.defaultProps = {
  value: '',
  placeholder: 'Add description',
  hasError: false,
  onChange: () => {}
};

export default Textarea;
