import { ITextInputProps } from './TextInput.props';
import styles from './TextInput.module.scss';

const TextInput = ({
  labelText,
  className,
  placeholder,
  ...props
}: ITextInputProps): JSX.Element => (
  <div className={styles.wrapper}>
    {labelText && <label className={styles.labelText}>{labelText}</label>}
    <input placeholder={placeholder} className={styles.input} {...props} />
  </div>
);

export default TextInput;
