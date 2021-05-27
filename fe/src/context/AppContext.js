import React, { useState } from 'react';
import State from '../utils/State';

const AppContext = React.createContext();

const AppProvider = ({ children })=>{
  const [ state, setState ] = useState( new State() );

  return(
    <AppContext.Provider value={ {state, setState} }>
      { children }
    </AppContext.Provider>
  )
};

export { AppContext, AppProvider };