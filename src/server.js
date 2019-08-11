const express = require('express');
const mongoose = require('mongoose')
const routers = require('./routes');
const cors = require('cors')


const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', socket => {
    const { user } = socket.handshake.query
    console.log(user, socket.id)
    connectedUsers[user] = socket.id
})


mongoose.connect('mongodb://localhost:27017/tindev', { useNewUrlParser:true})
//'mongodb+srv://diego:avatar@cluster0-to3u8.mongodb.net/omnistack?retryWrites=true&w=majority'
app.use((req, res, next ) => {
    req.io = io
    req.connectedUsers = connectedUsers;
   return next()
})

app.use(cors()) //permite minha api ser acessada por qualquer endereço
app.use(express.json())
app.use(routers)


//GET, POST, PUT, DELETE

server.listen(3333);