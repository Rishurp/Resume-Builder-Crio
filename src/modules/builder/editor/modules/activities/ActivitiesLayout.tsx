import { Fragment, useState, SyntheticEvent } from 'react';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import Achievements from './components/Achievements';
import Involvements from './components/Involvements';
import { useActivity } from 'src/stores/activity';
import { moduleIsErrorInActivities } from 'src/redux/slices/templateSlice';
import { useDispatch } from 'react-redux';
export interface IActivityTab {
  key: string;
  label: string;
  component: () => JSX.Element;
}

export interface IAllActivityTabs {
  [key: string]: IActivityTab;
}

const allActivityTabs: IAllActivityTabs = {
  involvements: {
    key: 'involvements',
    label: 'Club & Activities',
    component: Involvements,
  },
  achievements: {
    key: 'achievements',
    label: 'Achievements',
    component: Achievements,
  },
};

const ActivitiesLayout = () => {
  const [activeTab, setActiveTab] = useState(allActivityTabs['involvements']);
  const activities = useActivity((state) => state.activities);
  const dispatch = useDispatch();
  const changeActiveTab = (event: SyntheticEvent, key: string) => {
    const selectedTab = allActivityTabs[key];
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
    isErrorInActivity()
  };

  const isErrorInActivity = () =>{
    if(activities.achievements == "<p><br></p>" || activities.involvements == "<p><br></p>"){
      dispatch(moduleIsErrorInActivities(true));
    }else{
      dispatch(moduleIsErrorInActivities(false));
    }
  }

  console.log(activities.involvements,"khgvkgvklsdfghoaifhug")
  return (
    <Fragment>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabs={allActivityTabs}
      ></BasicHeader>
      <BasicPanel activeTab={activeTab} />
    </Fragment>
  );
};

export default ActivitiesLayout;
