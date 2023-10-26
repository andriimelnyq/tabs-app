import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { TabType } from '../types/TabType';
import '../App.scss';

type Props = {
  data: TabType[] | null;
};

const TabLoader: React.FC<Props> = ({ data }) => {
  const { tabId } = useParams();

  const currentTab = tabId
    ? data?.find(tab => tab.id === tabId)
    : data?.find(tab => tab.order === 0);

  const currentTabPath = currentTab?.path.slice(0, -3);
  const Component = lazy(() => import(`./${currentTabPath}`));

  return (
    <div className="app">
      <Component />
    </div>
  );
};

export default TabLoader;
