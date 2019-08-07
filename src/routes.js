const express = require('express')
const routers = express.Router()
const DevController = require('./../src/controllers/DevController')
const Likecontroler = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')


routers.get('/devs', DevController.index)
routers.post('/devs',DevController.store)
routers.post('/devs/:devId/likes', Likecontroler.store)
routers.post('/devs/:devId/dislikes', DislikeController.store)

module.exports = routers 