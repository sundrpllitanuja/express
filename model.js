const mongoose = require('mongoose');
const StdData = mongoose.Schema({
    username :{
        type: String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    age :{
        type : Number,
        required : true,
    },
    college :{
        type : String,
        required : true,
    },
    course :{
        type : String,
        required : true,
    }
    })

module.exports = mongoose.model('stddata',StdData)