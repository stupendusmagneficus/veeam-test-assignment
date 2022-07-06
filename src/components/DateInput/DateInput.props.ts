import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IDateInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  date: string;
  labelText: string;
}
