import { ICheckBoxProps } from './CheckBox.props';
import styles from './CheckBox.module.scss';

export const CheckBox = ({
  checked,
  labelText,
  ...props
}: ICheckBoxProps): JSX.Element => (
  <div className={styles.wrapper}>
    {labelText && <label className={styles.labelText}>{labelText}</label>}
    <input
      readOnly
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      {...props}
    />
  </div>
);

export default CheckBox;
