import styled from 'styled-components';

function Button1to3({ icon, ...props }){
  return(
    <RatioWrapper>
      <ButtonWrapper {...props} >
        { icon() }
      </ButtonWrapper>
    </RatioWrapper>
  );
};

export default Button1to3;

const RatioWrapper = styled.div`
  width: 33%;
  height: 0;
  padding-bottom: 11%;
  position: relative;
`;

const ButtonWrapper = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${ ({ theme }) => theme.color.buttonGreen };
  border: 0 solid transparent;
  border-radius: 0 0 8px 8px;
  color: white;
  cursor: pointer;
  font-size: 2em;
  transform: scale(1);
  transition: transform ease-out 0.3s;
  box-shadow: 1px 1px 6px ${ ({ theme }) => theme.color.shadow };

  &:hover{
    transform: scale(1.03);
  }

  &:active{
    transform: scale(1);
  }

`;