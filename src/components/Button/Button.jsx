import React from 'react';
import css from './button.module.css';
import clsx from 'clsx';

const Button = ({
  children,
  selected = false,
  type = 'button',
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
