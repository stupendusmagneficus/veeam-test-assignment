import { IAppWrapperProps } from './AppWrapper.props';
import styles from './AppWrapper.module.scss';
import React from 'react';

const AppWrapper = ({ children, ...props }: IAppWrapperProps): JSX.Element => (
  <div className={styles.appWrapper} {...props}>
    {children}
  </div>
);

export default AppWrapper;
