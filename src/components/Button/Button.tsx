import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({
  appearance,
  buttonText,
  className,
  ...props
}: IButtonProps): JSX.Element => (
  <button
    className={cn(styles.button, className, {
      [styles.primary]: appearance == 'primary',
      [styles.ghost]: appearance == 'ghost',
    })}
    {...props}
  >
    {buttonText}
  </button>
);

export default Button;
