import { useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function ModalContainer({ isopen, closemodal, render }){

  const modal = useRef(null)

  const close = useCallback((e)=>{
    if(e.target.id === 'modal-container') closemodal();
  }, [closemodal])

  return(
    <>
      {
        (isopen) 
        ? ReactDOM.createPortal(
          <ModalWrapper
            id="modal-container"
            ref={ modal }
            onClick={ (event)=>close(event) }
          >
            { render(closemodal) }
          </ModalWrapper>, document.body
        )
        : null
      }
    </>
  );
};

export default ModalContainer;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  background-color: ${ ({ theme }) => theme.color.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`