import { useContext } from 'react';
import { useTransition } from 'react-spring'
import styled from 'styled-components';

import { AppContext } from '../../context/AppContext'

import TableRowContainer from '../TableRowContainer/TableRowContainer';

const TableBodyContainer = ()=>{

  const { state } = useContext( AppContext );

  const transitionElements = useTransition(state.filteredEmployees, item => item.uuid, {
    config:{ duration: 300 },
    from:{ paddingLeft: '105%', opacity: 0, height: '100px' },
    enter: { paddingLeft: '0%', opacity: 1 },
    leave:[
      { paddingLeft: '105%', opacity: 0 },
      { height: '0px' }
    ]
  });

  return(
    <TableBodyWrapper>
      {
        transitionElements.map(({ item, props, key })=>{
          return(<TableRowContainer employee={ item } key={ key } fixlabel={ state.fix.label }/>);
        })
      }
    </TableBodyWrapper>
  );
};

const TableBodyWrapper = styled.div`
  width: 100%;
  height: 600px;
  padding: 20px 4px;
  overflow-y: scroll;  
`;

export default TableBodyContainer;