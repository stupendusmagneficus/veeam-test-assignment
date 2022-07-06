import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonText: string;
  appearance: 'primary' | 'ghost';
  className?: string;
}
