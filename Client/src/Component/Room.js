import React,{useEffect,useContext} from 'react'
import {useParams} from "react-router-dom"
import {roomContext} from "../context/RoomContext.js"
import VideoPlayer from "./VideoPlayer.js"
import ScreenSharing from "./ScreenSharing.js"
import "./style.css"
const Room = () => {
    const {id}=useParams();
    const {ws,me,stream}=useContext(roomContext);

    useEffect(()=>{
        if(me)
        ws.emit("join-room",{roomId:id,peerId:me._id})
    },[id,me,ws])
  return (
    <>
    <div className="  bg-blue-400 color-white font-thin text-3xl flex items-center justify-center">  Room id {id} </div>
    <div className=" h-screen hh flex items-center justify-center">
        {/* Room id {id} */}
         <VideoPlayer  stream={stream} ></VideoPlayer>
        

        </div>
        </>
  )
}

export default Room

