import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IAppWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
