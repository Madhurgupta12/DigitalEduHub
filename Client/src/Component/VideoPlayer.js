import React from 'react'
import {useRef,useEffect} from "react"


const VideoPlayer = ({stream}) => {
    const videoRef=useRef("");
useEffect(()=>{
    if (videoRef.current && stream) {
    videoRef.current.srcObject=stream;
    }
   
},[stream])
    
  return (
    <video ref={videoRef} autoPlay></video>
  )
}

export default VideoPlayer

