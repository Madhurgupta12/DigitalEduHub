const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
dotenv.config();
 const {roomHandler}=require("./room/app")
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {cors:"*",methods:["GET", "POST"]});

server.listen(5001,(req,res)=>{
    console.log("Socket server running on port " + 5001)
})

io.on("connection", (socket) => {
  console.log("user connected");

  roomHandler(socket);

socket.on("disconnect",()=>{
    console.log("user disconnected");
})

});

const userRoute = require("./routes/userRoute");
const teamRoute = require("./routes/teamRoute");
const { connectDB } = require("./db/db");

app.use(express.json());

app.use("/api", userRoute);
app.use("/api/user", teamRoute);

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running at ${process.env.PORT}`);
});

//connectDB();
