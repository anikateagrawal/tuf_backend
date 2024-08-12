const { default: mongoose } = require("mongoose");

const schema=new mongoose.Schema({
    visibility:Boolean,
    timer:Number,
    content:String,
    link:String
})

const model=new mongoose.model('banner',schema)

module.exports=model