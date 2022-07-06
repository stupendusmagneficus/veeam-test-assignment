import React from 'react';
import NumberInput from '../../NumberInput/NumberInput';
import TextInput from '../../TextInput/Textinput';
import TextArea from '../../TextArea/TextArea';
import CheckBox from '../../CheckBox/CheckBox';
import Radio from '../../Radio/Radio';
import DateInput from '../../DateInput/DateInput';
import Button from '../../Button/Button';
import { IResultTab } from './TabsComponents.props';
import styles from './Tabs.module.scss';
import {
  isButton,
  isCheckBox,
  isDate,
  isNumber,
  isRadio,
  isText,
  isTextArea,
  IConfigProps,
} from '../../../interfaces/config.interface';

const ResultTab = (props: IResultTab) => {
  if (!props.config) return <span>Please fill a config!</span>;

  try {
    const config: IConfigProps = JSON.parse(props.config as any);

    const result = config.map((item) => {
      if (isNumber(item)) {
        const { id, labelText, value } = item;
        return <NumberInput key={id} labelText={labelText} value={value} />;
      } else if (isText(item)) {
        const { labelText, placeholder, id } = item;
        return (
          <TextInput key={id} labelText={labelText} placeholder={placeholder} />
        );
      } else if (isDate(item)) {
        const { date, labelText, id } = item;
        return <DateInput date={date} key={id} labelText={labelText} />;
      } else if (isCheckBox(item)) {
        const { checked, id, labelText } = item;
        return <CheckBox checked={checked} key={id} labelText={labelText} />;
      } else if (isRadio(item)) {
        const { id, labelText, checked } = item;
        return <Radio checked={checked} key={id} labelText={labelText} />;
      } else if (isTextArea(item)) {
        const { placeholder, id, labelText } = item;
        return (
          <TextArea placeholder={placeholder} key={id} labelText={labelText} />
        );
      } else if (Array.isArray(item)) {
        return (
          <div className={styles.buttonsWrapper} key={Math.random() * 7}>
            {item.map((button) => {
              if (isButton(button)) {
                const { buttonText, appearance, id } = button;
                return (
                  <Button
                    buttonText={buttonText}
                    appearance={appearance}
                    key={id}
                  />
                );
              }
            })}
          </div>
        );
      }
    });

    return <>{result}</>;
  } catch (e: any) {
    return (
      <span>Oops! Seems to be not valid JSON object. {e.toString()} </span>
    );
  }
};

export default ResultTab;
