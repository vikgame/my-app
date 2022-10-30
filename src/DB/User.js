const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    user:String,
    password:String    

});

module.exports =mongoose.module("user",userSchema);
