const {Socket}=require( "socket.io");
const { v4: uuidv4 } = require('uuid');



const roomUsers={};
 const roomHandler=(socket)=>{

const createRoom=()=>{
    const roomId=uuidv4();
    socket.join(roomId);
    roomUsers[roomId]=[];
    socket.emit("room-created",{roomId});
    console.log("user create the room")
}
const leaveRoom=(roomId,peerId)=>{
    roomUsers[roomId] =  roomUsers[roomId].filter(item => item !== peerId);
    console.log(roomUsers[roomId]);
}

const joinRoom=(x)=>{

    if (!roomUsers[x.roomId]) {
        // If the key doesn't exist, initialize it as an empty array
        roomUsers[x.roomId] = [];
      }
      const nj=x.peerId
     roomUsers[x.roomId]= roomUsers[x.roomId].concat(nj);
    console.log("user joined the room",x.roomId);
   // console.log("array");
    console.log(roomUsers);
    socket.join(x.roomId);
    socket.emit("get-users",{
        // roomId:x.roomId,
        participants:roomUsers[x.roomId]
    })

    socket.on("disconnect",()=>{
        console.log(x.peerId);
        leaveRoom(x.roomId,x.peerId)
    })


}
    socket.on("create-room",createRoom)
    socket.on("join-room",joinRoom);

}
module.exports={roomHandler}