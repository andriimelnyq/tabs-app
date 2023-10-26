import React from 'react';
import { Link } from 'react-router-dom';
import { TabType } from '../types/TabType';
import './Header.scss';

type Props = {
  data: TabType[] | null;
};

export const Header: React.FC<Props> = ({ data }) => {
  return (
    <header className="header">
      {data?.map(tab => (
        <Link to={`/${tab.id}`} className="header__link" key={tab.id}>{tab.title}</Link>
      ))}
    </header>
  );
};
