const mongoose=require("mongoose");
const {isEmail} =require("validator");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minHeight: 3,
        unique:true,
        maxHeight: 200,

    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        minHeight: 3,
        maxHeight: 200,

    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate:[isEmail],
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minHeight: 4,
        maxHeight: 200,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:"admin"
    },
    image:{
        type:String,
        default:"/img/user.jpg",
    },
},{
    timestamps:true
});

userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next()
})


module.exports=mongoose.model("user",userSchema);