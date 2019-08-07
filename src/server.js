const express = require('express');
const mongoose = require('mongoose')
const routers = require('./routes');
const cors = require('cors')

mongoose.connect('mongodb+srv://diego:avatar@cluster0-to3u8.mongodb.net/omnistack?retryWrites=true&w=majority', { useNewUrlParser:true})

const server = express();
server.use(cors()) //permite minha api ser acessada por qualquer endereço
server.use(express.json())
server.use(routers)


//GET, POST, PUT, DELETE

server.listen(3333);