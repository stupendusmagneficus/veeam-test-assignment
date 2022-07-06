import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface INumberInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: number;
  labelText: string;
}
