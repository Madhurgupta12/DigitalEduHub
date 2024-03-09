import React, { createContext } from "react";
import { useEffect,useState } from "react";
import socketIOClient from "socket.io-client";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import Peer from "peerjs"
const WS = "http://localhost:5001";

export const roomContext = createContext(null);



const ws = socketIOClient(WS);

const RoomProvider = ({ children }) => {

    const [stream, setStream] = useState("")
  const navigate = useNavigate();
const [me,setMe]=useState("");


  const enterRoom = ({ roomId }) => {
    navigate(`/room/${roomId}`);
    console.log({ roomId });
  };

  //get user information
const getUsers=({participants})=>{
    console.log(participants);
}




  useEffect(() => {
const meId=uuidv4();
const peer=new Peer(meId);
setMe(peer);

try{
navigator.mediaDevices.getUserMedia({
    video:true,audio:false

})
.then((stream)=>{
    setStream(stream)
})
}
catch(error){
console.log(error);
}

    ws.on("room-created", enterRoom);
    ws.on("get-users",getUsers);
  
   

  }, []);


  return <roomContext.Provider value={{ ws,me,stream}}>{children}</roomContext.Provider>;
};
export default RoomProvider;
