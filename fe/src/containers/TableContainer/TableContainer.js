import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  max-width: 700px;
  min-width: 650px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${ ({ theme }) => theme.color.primary };
  border: 1px solid ${ ({ theme }) => theme.color.aux };
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 2px 2px 8px #9E9E9E;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export default TableContainer;