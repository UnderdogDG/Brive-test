import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import { AppContext } from '../../context/AppContext';

function SearchInput(){

  const {state, setState } = useContext(AppContext);

  const inputRef = useRef(null);

  const filterEmployees = (e)=>{
    console.log("filtered...");
    let str = inputRef.current.value.trim();
    // console.log(str, e)
    if(str){
      setState(prev=>prev.filterEmployees(str));
      console.log({state});
    }
  }

  return(
    <SearchInputWrapper>
      <TextInput ref={inputRef} type={"text"} onChange={ (e)=>filterEmployees(e) }/>
      <ButtonSearch>
        <IconContainer>
          <BiSearch />
        </IconContainer>
      </ButtonSearch>
    </SearchInputWrapper>
  );
}

const SearchInputWrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

const TextInput = styled.input`
  box-shadow: none;
  border: 1px solid ${ ({ theme }) => theme.color.aux };
  border-right: 0px solid transparent;
  border-radius: 8px 0 0 8px;
  color: ${ ({ theme }) => theme.color.black };
  padding: 10px 5px 6px;
  text-align: end;
  flex-grow: 3;
  box-sizing: border-box;
`;

const ButtonSearch = styled.button`
  display: block;
  width: 15%;
  background-color: ${ ({ theme }) => theme.color.aux };;
  border: 1px solid ${ ({ theme }) => theme.color.aux };
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  font-size: 1.3em;
  transform-origin: 50% 50%;
  box-sizing: border-box;
  padding: 3px;

  &:hover{
    background-color: ${ ({ theme }) => theme.color.buttonGreen };
    font-size: 1.4em;
  }

  &:active{
    font-size: 1em;
  }
`;

const IconContainer = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 50% 50%;
  color: ${ ({ theme }) => theme.color.primary };
`;



export default SearchInput; 