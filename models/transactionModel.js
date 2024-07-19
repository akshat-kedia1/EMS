const mongoose = require('mongoose')


const transectionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'Amount to batado bhai']
    },
     category: {
        type: String,
        required:[true,'Category to batado bhai']
    },
    type:{
        type:String,
        required:[true,"Type to batado bhai"]
    },
    reference:{
        type:String,
    },
    description: {
        type: String,
        required: [true, 'Description to dedo bhai']
    },
    date: {
        type: String,
        required: [true, 'Data doge ki nhi?']
    }
}, { timestamps: true })


const transectionModel = mongoose.model('transections', transectionSchema)