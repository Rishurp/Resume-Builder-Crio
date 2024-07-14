import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type TabTitle = {
  title: string;
  hasError: boolean;
};

interface BasicHeaderProps {
  activeTab: number;
  changeActiveTab: (event: React.SyntheticEvent, activeTab: number) => void;
  tabTitles: TabTitle[];
}

const BasicHeader: React.FC<BasicHeaderProps> = ({ activeTab, changeActiveTab, tabTitles }) => {
  console.log(tabTitles);
  return (
    <Tabs value={activeTab} onChange={changeActiveTab} variant="fullWidth">
      {tabTitles.map((tab, index,) => (
        <Tab
          icon={tab.hasError ? <FiberManualRecordIcon sx={{ color: 'red' }} fontSize="small" /> : null}
          iconPosition="end"
          value={index}
          key={index}
          label={tab.title}
          sx={{
            color: 'rgb(46 64 82)',
            textTransform: 'none',
            fontSize: '1rem',
          }}
        />
      ))}
    </Tabs>
  );
};

export default BasicHeader;
