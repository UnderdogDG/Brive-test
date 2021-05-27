import { useCallback, useContext } from 'react';

import { AppContext } from '../../context/AppContext'

function OptionSelector({ options }){

  const { setState } = useContext(AppContext);

  const setFix = useCallback((fix)=>{
    setState(prev=>prev.setFix(fix))
  }, [setState]);

  return(
    <>
      { options(setFix) }
    </>
  );
};

export default OptionSelector;