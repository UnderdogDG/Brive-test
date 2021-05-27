import { useContext } from 'react';
import styled from 'styled-components';

import ButtonQuad from '../../components/Buttons/ButtonQuad';
import SearchInput from '../../components/Input/SearchInput';
import OptionSelector from '../../components/OptionSelector/OptionSelector';

import { AppContext } from '../../context/AppContext';
import { US, MX } from '../../utils/Fix';

function TableMenuContainer(){

  const { state } = useContext(AppContext);

  return(
    <TableMenuWrapper>
      <ExchangeMenuWrapper>
        <TotalEmployees>
          Empleados: {state.totalEmployees}
        </TotalEmployees>
      </ExchangeMenuWrapper>
      <SearchInputWrapper>
        <SearchInput />
      </SearchInputWrapper>
      <ExchangeMenuWrapper>
        <OptionSelector 
          options={( setFix )=>(
            <>
              <ButtonQuad icon={ ()=><Currency>MX</Currency> } onClick={ ()=>setFix(MX) } />
              <ButtonQuad icon={ ()=><Currency>US</Currency> } onClick={ ()=>setFix(US) } />
            </>
          )}
        />
      </ExchangeMenuWrapper>
    </TableMenuWrapper>
  );
};

export default TableMenuContainer;

const TableMenuWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
`;

const ExchangeMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 0 0 0;
  padding: 0 8px;
`;

const Currency = styled.span`
  color: ${ ({ theme })=> theme.color.aux };
  font-size: 0.5em;
`;

const TotalEmployees = styled.p`
  text-align: center;
  color: ${ ({ theme })=> theme.color.black }
`

