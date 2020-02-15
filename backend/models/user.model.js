const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    first_name:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    last_name:{
        type:String,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    college:String,
    branch: String,
    interested_subjects:[String]
},{
    timestamps:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;