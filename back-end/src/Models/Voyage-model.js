const mongoose=require("mongoose");

// table de voyage //les information de voyage
const voyageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minHeight: 3,
        maxHeight: 200,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        minHeight: 3,
        maxHeight: 200,
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
        minHeight: 10,
    },
    from:{
        type:String,
        required:true,
        trim:true,
        minHeight: 5,
        maxHeight: 200,
    },
    to:{
        type:String,
        required:true,
        trim:true,
        minHeight: 5,
        maxHeight: 200,
    },
    place:{
        type:String,
        required:true,
        trim:true,
        minHeight: 3,
        maxHeight: 200,
    },
    date:{
        type:Date,
        required:true,
    },
    heur:{
        type:String,
        trim:true,
        required:true,
    },
    payer:{
        type:Number,
        default:000,

    },
    reste:{
        type:Number,
        default:000,
    },
},{
    timestamps:true
});

module.exports=mongoose.model("voyage",voyageSchema);