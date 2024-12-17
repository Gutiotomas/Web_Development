import { Board } from './components/Board';
import React from 'react';

export const App: React.FC = () => {

  return (
    <div className="game">
      <Board />
    </div>
  );
}

export default App;