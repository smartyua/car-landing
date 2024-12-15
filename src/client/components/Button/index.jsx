// @flow
import * as React from 'react';
import _ from 'lodash';
import { ClipLoader } from 'react-spinners';

import styles from './button.module.scss';

import * as Icon from '../Icon';

type Props = {
  size?: string,
  loading?: boolean,
  disabled?: boolean,
  className?: string,
  type?: string,
  icon?: string,
  children?: React.Node,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void
};

const Button = ({
  children,
  size = 'default',
  disabled,
  loading,
  className = '',
  type = '',
  onClick,
  icon
}: Props): any => {
  const style = styles[size] ? styles[size] : styles.default;
  const handleOnClick = disabled ? () => {} : onClick;
  const IconSVG = icon ? _.get(Icon, icon) : '';
  const buttonType = type === 'arrow' ? styles.rightArrow : '';

  return (
    <button
      type="submit"
      className={`${style} ${className} ${buttonType}`.trim()}
      disabled={disabled || loading}
      onClick={handleOnClick}
    >
      {icon && <IconSVG className={styles.btnIcon} />}
      {children}
      {loading && (
        <span className={styles.loader}>
          <ClipLoader size={15} color="#d7d7d7" loading={loading} />
        </span>
      )}
    </button>
  );
};

export default Button;
