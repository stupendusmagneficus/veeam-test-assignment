import { IDateInputProps } from './DateInput.props';
import styles from './DateInput.module.scss';

export const DateInput = ({
  date,
  labelText,
  ...props
}: IDateInputProps): JSX.Element => (
  <div className={styles.wrapper}>
    {labelText && <label className={styles.labelText}>{labelText}</label>}
    <input type="date" className={styles.date} value={date} {...props} />
  </div>
);

export default DateInput;
