import { useContext } from 'react';

import TitleBar from '../TitleBar/TitleBar';
import TableBodyContainer from '../TableBodyContainer/TableBodyContainer';
import TableFooterContainer from '../TableFooterContainer/TableFooterContainer';
import TableMenuContainer from '../TableMenuBarContainer/TableMenuContainer';

import { AppContext } from '../../context/AppContext';

function LayoutContainer(){

  const { state } = useContext(AppContext);

  return(
    <>
      <TitleBar title={ state.company }/>
      <TableMenuContainer />
      <TableBodyContainer />
      <TableFooterContainer />
    </>
  );
};

export default LayoutContainer;