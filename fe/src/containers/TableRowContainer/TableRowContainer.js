import { useState, useContext } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

import IncomeAnimated from '../IncomeContainer/IncomeAnimated';
import ButtonIconText from '../../components/Buttons/ButtonIconText';
import ModalContainer from '../ModalContainer/ModalContainer';
import ModalUserContainer from '../ModalUserContainer/ModalUserContainer';

import { AppContext } from '../../context/AppContext';

import AjaxRequest from '../../utils/AjaxRequest';
import SiteData from '../../utils/SiteData';

function TableRowContainer({ fixlabel, employee }){

  const [ modalOpen, setModalOpen ] = useState(false);

  const { setState } = useContext(AppContext);

  const updateEmployee = async(data)=>{
    let ajaxRequest = new AjaxRequest();
    let res = await ajaxRequest.updateEmployee(data);
    setState(prev=>prev.setEmployees(res.response))
    console.log(res);
    setModalOpen(false);
  }

  const deleteEmployee = async(uuid)=>{
    let ajaxRequest = new AjaxRequest();
    let res = await ajaxRequest.deleteEmployee(uuid);
    console.log(res);
    setState(prev=>prev.setEmployees(res.response));
  }

  const siteData = new SiteData()

  return(
    <TableRowWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <ImgStyled src={ `${siteData.siteURL}/imgs/${employee.uuid}.png` }/>
        </ImageWrapper>
        <DescriptionWrapper>
          <NameContainer>
            { `${employee.name} ${employee.lastName}` }
          </NameContainer>
          <CompanyContainer>
            { employee.company }
          </CompanyContainer>
        </DescriptionWrapper>
        <IncomeWrapper>
          <SignLabel>$</SignLabel>
          <IncomeAnimated income={ employee.income } />
          <CurrencyLabel>{ fixlabel }</CurrencyLabel>
        </IncomeWrapper>
        <ActionsWrapper>
          <ButtonIconText icon={ () => <BiEdit />  }  text='Editar' onClick={ ()=>setModalOpen(prev=>!prev) } />
          <ButtonIconText icon={ () => <AiOutlineDelete />  }  text='Borrar' onClick={()=>deleteEmployee(employee.uuid)}/>
        </ActionsWrapper>
      </ContentWrapper>
      <ModalContainer 
        isopen={ modalOpen } 
        closemodal={ ()=>setModalOpen(()=>false) }
        render={ (closemodal)=>(
          <ModalUserContainer 
            title={ "Editar Empleado" }
            closemodal={ closemodal }
            employee={ employee }
            action={ updateEmployee }
          />
        )} 
      />
    </TableRowWrapper>
  );
};

export default TableRowContainer;

const TableRowWrapper = styled(animated.div)`
  width: 100%;
  height: 120px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  &:nth-child(odd){
    background: ${ ({ theme }) => theme.color.columnOdd };
  }

  &:nth-child(even){
    background: ${ ({ theme }) => theme.color.columnEven };
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  border: 1px solid ${ ({ theme }) => theme.color.aux };
  border-radius: 8px;
  box-shadow: 1px 1px 6px ${ ({ theme }) => theme.color.aux };
  overflow: hidden;
  z-index: 2;

  &::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${ ({ theme }) => theme.color.columnHighlight };
    opacity: 0;
    transition: opacity ease-out 0.3s;
    z-index: -1;
  }

  &:hover::before{
    opacity: 0.2;
  }

`;

const ImageWrapper = styled.div`
  width: 15%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${ ({ theme }) => theme.color.imageBackColor };
`;

const ImgStyled = styled.img`
  height: 100%;
  object-fit: cover;
`;

const DescriptionWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
  padding: 15px 10px;
  padding-left: 15px;
`;

const NameContainer = styled.h2`
  font-size: 1.2em;
  font-weight: 500;
  color: ${ ({ theme }) => theme.color.black };
  margin: 0;
  padding: 0;
`;

const CompanyContainer = styled.h3`
  font-size: 1em;
  font-weight: 400;
  color: ${ ({ theme }) => theme.color.aux };
  margin: 0;
  padding: 0;
`;

const IncomeWrapper = styled.div`
  width: 146px;
  /* flex-grow: 1; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${ ({ theme }) => theme.color.black };
  padding: 5px 10px;
  border-left: 1px solid ${ ({ theme }) => theme.color.imageBackColor };
`;

const SignLabel = styled.span`
  width: 20px;
`;

const CurrencyLabel = styled.span`
  width: 22px;
  font-weight: 400;
  font-size: 0.8em;
`;

const ActionsWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  border-left: 1px solid ${ ({ theme }) => theme.color.imageBackColor };
`;

