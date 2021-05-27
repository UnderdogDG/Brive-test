import styled from 'styled-components';

function ButtonQuad({ icon, ...props }){
  return(
    <Responsive {...props}>
      <RatioWrapper>
        <ButtonQuadContainer>
          <IconContainer>
            { icon() }
          </IconContainer>
        </ButtonQuadContainer>
      </RatioWrapper>
    </Responsive>
  );
};

const Responsive = styled.div`
  flex-grow: 3;
  min-width: 48px;
  min-height: 48px;
  margin: 0 4px;
  cursor: pointer;

  &:first-child{
    margin-left: 0;
  }

  &:last-child{
    margin-right: 0;
  }
`;

const RatioWrapper = styled.div`
  width: 100%;
  height: 100%; 
  padding-bottom: 100%;
  position: relative;
`;

const ButtonQuadContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ ({ theme }) => theme.color.aux };
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 50%, 50%;
`;

export default ButtonQuad;