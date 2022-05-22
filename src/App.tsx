import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/Pipfolio.css';
import './styles/App.css';

// Views
import Loading from './views/Loading';
import PipfolioMain from './views/PipfolioMain';

export default  function App() {
  const [ loaded, setLoaded ] = useState(true);

  // setTimeout(() => {
  //   setLoaded(true);
  // }, 3000);

  return (
    <BrowserRouter>
      <div className='App'>
        {!loaded && <Loading />}
        {loaded &&  <PipfolioMain />}
      </div>
    </BrowserRouter>
  );
};
