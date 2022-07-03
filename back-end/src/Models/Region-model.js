const mongoose=require("mongoose");

// table de region 
const regionSchema=new mongoose.Schema({
    ville:{
        type:String,
        require:true,
        trim:true,
        unique:true,
    },
    image:{
        type:String,
        require:true,
        trim:true,
    },
    description:{
        type:String,
        require:true,
        trim:true,
    },
    prix:{
        type:Number,
        require:true,
    }

},{
    timestamps:true
});

module.exports=mongoose.model("region",regionSchema);