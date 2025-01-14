import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requried:true
    },
    phone:{
        type:String,
        requried:true,
    },
    address:{
        type:String,
        requried:true,
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

export default mongoose.model('users',userSchema)