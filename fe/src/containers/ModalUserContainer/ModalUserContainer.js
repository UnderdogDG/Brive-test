import { useRef, useState } from 'react';
import styled from 'styled-components';
import { BiCheckCircle, BiXCircle, BiFullscreen } from 'react-icons/bi';
import { MdFiberManualRecord } from 'react-icons/md';

import TitleBar from '../TitleBar/TitleBar';
import FieldInput from '../../components/Input/FielInput';
import ButtonIconText from '../../components/Buttons/ButtonIconText';
import ButtonQuad from '../../components/Buttons/ButtonQuad';
// import CaptureImage from '../../components/CaptureImage/CaptureImage';

import { params, aspect } from '../../utils/VideoConfig';
import Employee from '../../utils/Employee';

function ModalUserContainer({ closemodal, title, action, employee=null }){

  const nameRef = useRef(null);
  const lastnameRef = useRef(null);
  const incomeRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const compat = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia);

  const [ visible, setVisible ] = useState(false);

  const startRecording = ()=>{
    setVisible(false);
    if(compat){
      navigator.mediaDevices.getUserMedia(params)
        .then((stream)=>{
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((e)=>{
          console.log(e);
        })
    }
    else{
      console.log("Browser no compatible!!!");
    }
      
    }

  const takePhoto = ()=>{
    setVisible(true);
    let context = canvasRef.current.getContext('2d');
    context.fill = "#AAA";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.drawImage(videoRef.current, 0, 0, 160, 240);
    videoRef.current.pause();
  }

  const getData = ()=>{
    let data = new Employee(
      nameRef.current.value, 
      lastnameRef.current.value, 
      incomeRef.current.value, 
      canvasRef.current.toDataURL('image/png'), 
      employee.uuid
    );
    action(data);
  }

  return(
    <ModalUserWrapper>
      <TitleBar title={ title } />
      <ModalBody>
        <ModalSection>
          <ImageContainer>
            <VideoStyled width={ aspect.width }  height={ aspect.height } ref={ videoRef } autoPlay={ true } muted={ true } />
            <CanvasStyled width={ aspect.width } height={ aspect.height } ref={ canvasRef } style={ { opacity: (visible) ? 1 : 0 } } />
          </ImageContainer>
          <ControlContainer>
            <ButtonQuad icon={ ()=><MdFiberManualRecord /> } onClick={()=>startRecording()} style={ {marginRight: '30px'} } />
            <ButtonQuad icon={ ()=><BiFullscreen /> } onClick={()=>takePhoto()} style={ {marginLeft: '30px'} } />
          </ControlContainer>
        </ModalSection>
        <ModalSection>
          <FieldInput label={"Nombre"} nestref={nameRef} value={ (employee) ? employee.name : '' } />
          <FieldInput label={"Apellido"} nestref={lastnameRef} value={ (employee) ? employee.lastName : ''} />
          <FieldInput label={"Salario"} nestref={incomeRef} value={ (employee) ? employee.income : '' } />
        </ModalSection>
      </ModalBody>
      <ModalFooter>
        <ButtonIconText icon={ ()=><BiCheckCircle /> } text={ "Aceptar" } style={ { margin: '0 5px' } } onClick={ ()=>getData() } />
        <ButtonIconText icon={ ()=><BiXCircle /> } text={ "Cancelar" } style={ { margin: '0 5px' } } onClick={ ()=>closemodal() } />
      </ModalFooter>
    </ModalUserWrapper>
  );
};

export default ModalUserContainer;

const ModalUserWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${ ({ theme }) => theme.color.primary };
  border: 1px solid ${ ({ theme }) => theme.color.buttonGreen };
  border-radius: 16px;
  overflow: hidden;
`;

const ModalBody = styled.div`
  width: 100%;
  flex-grow: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ModalFooter = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${ ({ theme }) => theme.color.imageBackColor };
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 240px;
  background-color: ${ ({ theme }) => theme.color.imageBackColor };
  position: relative;
`;

const VideoStyled = styled.video`
  width: 180px;
  height: 240px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CanvasStyled = styled.canvas`
  width: 180px;
  height: 240px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ControlContainer = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`