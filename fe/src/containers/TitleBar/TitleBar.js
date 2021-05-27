import styled from 'styled-components';

function TitleBar({ title='' }){
  return(
    <HeaderWrapper>
      <Title>{ title }</Title>
    </HeaderWrapper>
  );
}

export default TitleBar;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${ ({ theme }) => theme.color.aux };
  padding: 0.8em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Title = styled.h2`
  color: ${ ({ theme }) => theme.color.primary };
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;