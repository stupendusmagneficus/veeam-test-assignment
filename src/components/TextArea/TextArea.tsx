import { ITextAreaProps } from './TextArea.props';
import styles from './TextArea.module.scss';

const TextArea = ({
  labelText,
  className,
  placeholder,
  ...props
}: ITextAreaProps): JSX.Element => (
  <div className={styles.wrapper}>
    {labelText && <label className={styles.labelText}>{labelText}</label>}
    <textarea
      placeholder={placeholder}
      className={styles.textarea}
      {...props}
    />
  </div>
);

export default TextArea;
