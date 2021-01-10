const mongoose = require('mongoose')


const WorkerScheme = new mongoose.Schema({

    Emp_Name:{
        type : String,
        required: true,
    },
    Emp_id:{
        type : String,
        required: true,
    },
    Dept:{
        type : String,
        required: true,
    },
    Branch_name:{
        type : String,
        required: true,
    },
    sub:{
        type: Boolean,
        required: true,
        default: false,
    }

})

module.exports = mongoose.model('Worker', WorkerScheme)