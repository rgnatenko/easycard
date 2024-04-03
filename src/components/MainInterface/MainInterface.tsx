import React from 'react';
import { TopBar } from '../TopBar';
import { Board } from '../Board';

export const MainInterface: React.FC = () => {
  return (
    <div className="main">
      <TopBar />

      <Board />
    </div>
  );
};
