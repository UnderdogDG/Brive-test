import { useState, useContext } from 'react';
import styled from 'styled-components';
import { IoPersonAddOutline } from 'react-icons/io5';

import Button1to3 from '../../components/Buttons/Button1_3';
import ModalContainer from '../ModalContainer/ModalContainer';
import ModalUserContainer from '../ModalUserContainer/ModalUserContainer';
import AjaxRequest from '../../utils/AjaxRequest';
import Employee from '../../utils/Employee';

import { AppContext } from '../../context/AppContext';

function TableFooterContainer(){

  const [ isOpen, setIsOpen ] = useState(false);

  const { setState } = useContext(AppContext);

  const saveEmployee = async (data)=>{
    let ajaxRequest = new AjaxRequest();
    let res = await ajaxRequest.saveEmployee(data);
    setIsOpen(false);
    setState(prev=>prev.setEmployees(res.response));
    console.log(res);
  }

  const employee = new Employee();

  return(
    <TableFooterWrapper>
      <ChildContainer>
        <Button1to3 icon={ ()=><IoPersonAddOutline /> } onClick={()=>setIsOpen(prev=>!prev)} />
        <ModalContainer 
          isopen={isOpen}
          closemodal={()=>setIsOpen(()=>false)}
          render={(closemodal)=>(
            <ModalUserContainer 
              title={ "Crear Empleado" }
              closemodal={ closemodal }
              action={ saveEmployee }
              employee={ employee }
            />
          )}
        />
      </ChildContainer>
    </TableFooterWrapper>
  );
};

const TableFooterWrapper = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${ ({ theme }) => theme.color.primary };
`;

const ChildContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${ ( { theme }) => theme.color.aux };
  padding: 10px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default TableFooterContainer