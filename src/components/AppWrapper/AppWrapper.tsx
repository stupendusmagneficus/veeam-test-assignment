import { IAppWrapperProps } from './AppWrapper.props';
import styles from './AppWrapper.module.scss';

const AppWrapper = ({ children, ...props }: IAppWrapperProps) => (
  <div className={styles.appWrapper} {...props}>
    {children}
  </div>
);

export default AppWrapper;
