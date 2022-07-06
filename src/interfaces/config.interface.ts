export type IConfigItem =
  | INumberConfig
  | ITextConfig
  | ICheckBoxConfig
  | IRadioConfig
  | ITextAreaConfig
  | IDateInputConfig
  | IButtonConfig;

export type IConfigProps = IConfigItem[];

interface ICommonConfig {
  labelText: string;
  id: string;
}
interface INumberConfig extends ICommonConfig {
  type: 'number';
  value: number;
}

interface ITextConfig extends ICommonConfig {
  type: 'text';
  placeholder: string;
}

interface ICheckBoxConfig extends ICommonConfig {
  type: 'checkbox';
  checked: boolean;
}

interface IRadioConfig extends ICommonConfig {
  type: 'radio';
  checked: boolean;
}

interface ITextAreaConfig extends ICommonConfig {
  type: 'textarea';
  placeholder: string;
}

interface IDateInputConfig extends ICommonConfig {
  type: 'date';
  date: string;
}

interface IButtonConfig {
  type: 'button';
  buttonText: string;
  appearance: 'primary' | 'ghost';
  id: number;
}

export const isNumber = (x: unknown): x is INumberConfig =>
  (x as any).type === 'number';

export const isText = (x: unknown): x is ITextConfig =>
  (x as any).type === 'text';

export const isCheckBox = (x: unknown): x is ICheckBoxConfig =>
  (x as any).type === 'checkbox';

export const isRadio = (x: unknown): x is IRadioConfig =>
  (x as any).type === 'radio';

export const isTextArea = (x: unknown): x is ITextAreaConfig =>
  (x as any).type === 'textarea';

export const isDate = (x: unknown): x is IDateInputConfig =>
  (x as any).type === 'date';

export const isButton = (x: unknown): x is IButtonConfig =>
  (x as any).type === 'button';

export type IConfig = [
  { type: 'number'; value: number; labelText: string; id: number },
  { type: 'text'; placeholder: string; labelText: string; id: number },
  { type: 'checkbox'; checked: number; labelText: string; id: number },
  { type: 'radio'; checked: number; labelText: string; id: number },
  { type: 'date'; labelText: string; id: number; date: string },
  {
    type: 'button';
    buttonText: string;
    id: number;
    appearance: 'primary' | 'ghost';
  }[],
  {
    type: 'textarea';
    placeholder: string;
    labelText: string;
    id: number;
    value: string;
  },
];
