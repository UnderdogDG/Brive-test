import styled from 'styled-components';

function FieldInput({id, label, nestref, value}){
  return(
    <FieldWrapper>
      <LabelStyled htmlFor={ label }>{ label }</LabelStyled>
      <InputStyled id={ label } name={ label } ref={ nestref } defaultValue={value} />

    </FieldWrapper>
  );
};

export default FieldInput;

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  
  &:last-child{
    margin-bottom: 0;
  }
`;

const LabelStyled = styled.label`
  width: 100%;
  color: ${ ({ theme }) => theme.color.black };
  margin-bottom: 8px;
`;

const InputStyled = styled.input`
  width: 100%;
  border: 1px solid ${ ({ theme }) => theme.color.aux };
  border-radius: 8px;
  font-size: 1.2em;
  padding: 10px 5px 5px;
  box-sizing: border-box;
`;

