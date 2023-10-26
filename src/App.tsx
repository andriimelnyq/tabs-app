import React, { Suspense, useEffect, useState } from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import TabLoader from './components/TabLoader';
import { TabType } from './types/TabType';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const [data, setData] = useState<TabType[] | null>(null);

  useEffect(() => {
    fetch('/tabs.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <HashRouter>
      <div>
        <Header data={data} />

        {data ? (
          <Suspense fallback={<div className="app">Loading...</div>}>
            <Routes>
              <Route path="/" element={<TabLoader data={data} />} />
              <Route path="/:tabId" element={<TabLoader data={data} />} />
            </Routes>
          </Suspense>
        ) : (
          <div className="app">Loading data...</div>
        )}
      </div>
    </HashRouter>
  );
};
