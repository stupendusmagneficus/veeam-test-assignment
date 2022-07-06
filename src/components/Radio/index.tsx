import { IRadioProps } from './Radio.props';
import styles from './Radio.module.scss';

export const Radio = ({
  checked,
  labelText,
  ...props
}: IRadioProps): JSX.Element => (
  <div className={styles.wrapper}>
    {labelText && <label className={styles.labelText}>{labelText}</label>}
    <input
      readOnly
      type="radio"
      className={styles.radio}
      checked={checked}
      {...props}
    />
  </div>
);

export default Radio;
