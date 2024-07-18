import React, { Fragment, useEffect, useState } from 'react';
import { useBasicDetails } from 'src/stores/basic';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import { isObjectEmpty } from '../helper/isValidObject';
import { moduleIsError } from 'src/redux/slices/templateSlice';
import { useDispatch } from 'react-redux';

interface TabTitle {
  title: string;
  hasError: boolean;
}

interface BasicTabs {
  name?: string;
  label?: string;
  email?: string;
  phone?: string;
  profiles?: { url?: string }[];
  summary?: string;
}

const tabTitlesInitial: TabTitle[] = [
  { title: 'Contacts', hasError: false },
  { title: 'Links', hasError: false },
  { title: 'About', hasError: false }
];

const BasicLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabTitles, setTabTitles] = useState<TabTitle[]>(tabTitlesInitial);
  const [isClient, setIsClient] = useState(false);
  const basicTabs: BasicTabs = useBasicDetails((state) => state.values);
  const onChangeText = useBasicDetails.getState().reset;
  const dispatch = useDispatch();

  const changeActiveTab = (event: React.SyntheticEvent, activeTab: number) => {
    setActiveTab(activeTab);
  };

  useEffect(() => {
    setIsClient(true);

    const contactObj = {
      name: basicTabs.name ?? '',
      label: basicTabs.label,
      email: basicTabs.email,
      phone: basicTabs.phone,
    };

    const linksObj = {
      linkdin: basicTabs.profiles?.[0]?.url,
      github: basicTabs.profiles?.[1]?.url,
      crio: basicTabs.profiles?.[2]?.url
    };

    const newTabTitles = [...tabTitlesInitial];
    newTabTitles[0].hasError = isObjectEmpty(contactObj);
    newTabTitles[1].hasError = isObjectEmpty(linksObj);
    newTabTitles[2].hasError = basicTabs.summary === "<p><br></p>";

    setTabTitles(newTabTitles);

    // Dispatch the error state after setting the tab titles
    dispatch(moduleIsError(newTabTitles.some(tab => tab.hasError)));
  }, [basicTabs, dispatch]);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <Fragment>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabTitles={tabTitles}
      />
      <BasicPanel
        activeTab={activeTab}
        basicTabs={basicTabs}
        onChangeText={onChangeText}
      />
    </Fragment>
  );
};

export default BasicLayout;
