import React,{useContext,useEffect} from 'react'
import {roomContext} from "../context/RoomContext.js"
import socketIOClient from "socket.io-client"


const JoinButton = () => {

    const {ws}=useContext(roomContext);

    const CreateRoom=()=>{
        console.log("bhjnhu");
        ws.emit("create-room");
    }
   
  return (
    <div>
         <div className="App flex items-center justify-center">
<button onClick={CreateRoom} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Meeting</button>
    </div>
    </div>
  )
}

export default JoinButton
