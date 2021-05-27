import styled from 'styled-components';

function ButtonIconText({icon, text, ...props}){
  return(
    <ButtonWrapper {...props} >
      <IconWrapper>
        <IconRatioWrapper>
          <IconRatioContainer>
            { icon() }
          </IconRatioContainer>
        </IconRatioWrapper>
      </IconWrapper>
      <TextWrapper>
        <TextContainer>
          { text }
        </TextContainer>
      </TextWrapper>
    </ButtonWrapper>
  );
};

export default ButtonIconText;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: ${ ({ theme }) => theme.color.buttonGreen + '00' };
  border: 1px solid ${ ({ theme }) => theme.color.buttonGreen };
  border-radius: 8px;
  color: ${ ({ theme }) => theme.color.buttonGreen };
  cursor: pointer;
  transform: scale(1.0);
  transition: background ease-out 0.3s, transform ease-out 0.4s;
  padding: 2px 3px;

  &:hover{
    background: ${ ({ theme }) => theme.color.buttonGreen + 'FF' };
    color: ${ ({ theme }) => theme.color.primary };
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.div`
  flex-grow: 1;
  min-width: 36px;
  min-height: 36px;
`;

const IconRatioWrapper = styled.div`
  width: 100%;
  height: 100%; 
  padding-bottom: 100%;
  position: relative;
`;

const IconRatioContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  /* border-right: 1px solid ${ ( { theme } ) => theme.color.buttonGreen }; */
`;

const TextWrapper = styled.div`
  flex-grow: 3;
  min-width: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = styled.span`
  font-size: 0.9em;
  font-weight: 500;
`