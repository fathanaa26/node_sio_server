const app = require('express')();
const server = require('http').createServer(app);
const {Server} = require('socket.io')
const io = new Server(server)


app.get('/', (req, res) => {
  res.send("<h1>socket</h1>")
});

io.on('connection',(socket) => {
    
    socket.join("sroom_1");
    console.log(socket.rooms);

    socket.on("hey",(arg, callback)=>{
      console.log(arg)
    })

    setInterval(()=>{
      socket.emit("hell","o world")
    },1000)
    

    socket.on('disconnect',(socket)=>{
      console.log('a user disconnected')
    })
})

server.listen(8880, () => {
  console.log('listening on localhost:8880');
});