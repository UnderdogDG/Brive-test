import { useContext, useEffect } from 'react';

import LayoutContainer from '../LayoutContainer/LayoutContainer';

import { AppContext } from '../../context/AppContext';
import LoaderContainer from '../LoaderContainer/LoaderContainer';

import AjaxRequest from '../../utils/AjaxRequest';

function ContentLoaderContainer(){

  const { state, setState } = useContext( AppContext );

  useEffect(()=>{
    const request = new AjaxRequest();
    request.getEmployees().then(employees =>{ 
      setState(prev => prev.setEmployees(employees.response));
    });
  }, [setState]);

  return(
    <>
      {
        ( Object.keys(state.employees).length )
        ? <LayoutContainer /> 
        : <LoaderContainer />

      }
    </>
  );
};

export default ContentLoaderContainer;