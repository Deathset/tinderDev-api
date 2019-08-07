const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
    name: {
        type: String,
        required: false // obrigatorio ou não,  
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref:'Dev',
    }], 
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref:'Dev',
    }],
},
    {
        timestamps: true // createdAt= data de criação, updatedAT = data da ultima alteraçãp 
    }
)

module.exports = model('Dev', DevSchema);