import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ITextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelText: string;
  placeholder: string;
}
