import React from 'react';
import TextArea from '../../TextArea/TextArea';
import { textAreaPlaceholder } from '../../../helpers/textAreaPlaceholder';
import Button from '../../Button/Button';
import styles from './Tabs.module.scss';
import { IConfigTab } from './TabsComponents.props';

const ConfigTab = ({ handleChange, value }: IConfigTab) => (
  <>
    <TextArea
      labelText="Please set your own config or go with initial one!"
      value={value}
      onChange={handleChange}
      placeholder={textAreaPlaceholder}
    />
    <Button
      className={styles.configButton}
      buttonText="Apply"
      appearance="primary"
      type="submit"
    />
  </>
);

export default ConfigTab;
