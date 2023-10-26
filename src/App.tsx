import React, { Suspense, useEffect, useState } from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import TabLoader from './components/TabLoader';
import { TabType } from './types/TabType';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const [data, setData] = useState<TabType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/tabs.json')
      .then((response) => {
        setIsLoading(true);

        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch(() => setError('Unable to load data!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <HashRouter>
      <div>
        <Header data={data} />

        {isLoading && <div className="app">Loading...</div>}
        {error && <div className="app">{error}</div>}

        {!isLoading && !error && data && (
          <Suspense fallback={<div className="app">Loading...</div>}>
            <Routes>
              <Route path="/" element={<TabLoader data={data} />} />
              <Route path="/:tabId" element={<TabLoader data={data} />} />
            </Routes>
          </Suspense>
        )}
      </div>
    </HashRouter>
  );
};
