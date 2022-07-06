import React from 'react';
import { INumberInputProps } from './NumberInput.props';
import styles from './NumberInput.module.scss';

const NumberInput = ({
  value,
  labelText,
  className,
  ...props
}: INumberInputProps): JSX.Element => (
  <div className={styles.wrapper}>
    {labelText && <label className={styles.labelText}>{labelText}</label>}
    <input
      type="number"
      className={styles.numberInput}
      {...props}
      defaultValue={value}
    />
  </div>
);

export default NumberInput;
