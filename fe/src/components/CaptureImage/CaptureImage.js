import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdFiberManualRecord } from 'react-icons/md';
import { BiFullscreen } from 'react-icons/bi';
// import RecordRTCPromisesHandler from 'recordrtc';
// import RecordRTC from 'recordrtc';

import ButtonQuad from '../Buttons/ButtonQuad';

import { params, aspect } from '../../utils/VideoConfig'

const CaptureImage = ({ nestRef })=>{

  // const [ state, setState ] = useState({ stream: null, recorder: null });
  // const [ visible, setVisible ] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  
  // const startRecording = async()=>{
  //   state.stream = await navigator.mediaDevices.getUserMedia(params);
  //   state.recorder = new RecordRTCPromisesHandler(state.stream, {
  //     mimeType: 'video/webm',
  //     type: 'video'
  //   });


  const startRecording = ()=>{
    navigator.mediaDevices.getUserMedia(params)
      .then((stream)=>{
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  const takePhoto = ()=>{
    videoRef.current.pause();
    let context = nestRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, aspect.width, aspect.height);
    nestRef.current = nestRef.current.toDataURL('image/png');
    // let data = canvasRef.current.toDataURL('image/png');
  }

  // const activeVideo = (e)=>{
  //   setVisible(true);
  //   // videoRef.current.setAttribute('width', 160);
  //   // videoRef.current.setAttribute('height', 160);

  // }

  return(
    <>
      <ImageContainer>
        <video width={ aspect.width }  height={ aspect.height } ref={ videoRef } autoPlay={ true } muted={ true } />
        <canvas width={ aspect.width } height={ aspect.height } ref={nestRef} />
      </ImageContainer>
      <ControlContainer>
        <ButtonQuad icon={ ()=><MdFiberManualRecord /> } onClick={()=>startRecording()} style={ {marginRight: '30px'} } />
        <ButtonQuad icon={ ()=><BiFullscreen /> } onClick={()=>takePhoto()} style={ {marginLeft: '30px'} } />
      </ControlContainer>
    </>
    
  );
};

export default CaptureImage;

const ImageContainer = styled.div`
  width: 180px;
  height: 240px;
  background-color: ${ ({ theme }) => theme.color.imageBackColor };
`;

const ControlContainer = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`