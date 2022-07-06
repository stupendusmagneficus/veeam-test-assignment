import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export interface ITextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  labelText?: string;
  value?: string;
  placeholder: string;
}
