import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import styled from 'styled-components';
import { initialState } from '../../helpers/initialState';
import ResultTab from './TabsComponents/ResultTab';
import ConfigTab from './TabsComponents/ConfigTab';

const STabs = styled(Tabs)`
  display: block;
  margin: 0 auto;
  font-family: BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 22px;
  width: 80%;
  filter: drop-shadow(5px 5px 5px hsl(0deg 0% 0% / 0.5));
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 5px;
  display: flex;
  margin: 0;
`;

const STab = styled(Tab)`
  padding: 5px;
  cursor: pointer;
  background-color: var(--red);
  border-radius: 5px 12px 0 0;

  &.is-selected {
    background-color: var(--white);
  }

  &:focus {
    outline: none;
  }
`;

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 60vh;
  padding: 40px;
  margin-top: -5px;
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;

  &.is-selected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const TabsWrapper = () => {
  const [config, setConfig] = useState<string>(initialState);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert('All set! Please dont waste time and proceed to result tab!');
  };

  const handleChange = (e: { target: { value: string } }) =>
    setConfig(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <STabList>
          <STab>Config</STab>
          <STab>Result</STab>
        </STabList>
        <STabPanel>
          <ConfigTab handleChange={handleChange} value={config} />
        </STabPanel>
        <STabPanel>
          <ResultTab config={config} />
        </STabPanel>
      </STabs>
    </form>
  );
};

export default TabsWrapper;
