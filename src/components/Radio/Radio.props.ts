import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IRadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checked: boolean;
  labelText: string;
}
