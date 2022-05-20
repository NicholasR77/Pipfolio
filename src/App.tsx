import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/Pipfolio.css';
import './styles/App.css';

// Views
import PipfolioMain from './views/PipfolioMain';

export default  function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PipfolioMain />
      </div>
    </BrowserRouter>
  );
};
