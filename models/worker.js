const mongoose = require('mongoose')


const WorkerSchema = new mongoose.Schema({

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
        default: false,
    }

})

module.exports = mongoose.model('Worker', WorkerSchema)