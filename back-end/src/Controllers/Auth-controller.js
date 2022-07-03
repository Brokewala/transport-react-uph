const bcrypt=require('bcrypt');
const userModel=require("../Models/Users-model");
const { signupUtils } = require('../utils/user-utils');
const jwt=require("jsonwebtoken");

// token variable
const maxAge=3 * 24 *60 *60 *1000;//max age
const createToken=(id)=>{//creation de nouvelle token
    return jwt.sign({id},process.env.TOKEN_SECRET,{expiresIn:maxAge});//nouvelle token
}

// signup
module.exports.signup=async(req,res)=>{
    const newUserModel=new userModel(req.body);
    await newUserModel.save().then(docs=>{
        res.status(201).json({message:"inscription is successFull"})
    }).catch(err=>{
        const errorSignup=signupUtils(err);
        res.status(200).send({errorSignup})
    })
}

// login
module.exports.login=async(req,res)=>{
    const {email,password}=req.body;

    userModel.findOne({email:email}).then(docs=>{
        const hash_password=docs.password;
        // decryptage
        const result_password=bcrypt.compareSync(password,hash_password);
        if(result_password){
            const token=createToken(docs.id);//initialise le token
            res.cookie("jwt",token,{httpOnly:true,maxAge:maxAge})
            res.status(201).json({id:docs.id});

        }else{
            res.status(201).json({message:"password not valide"});
        }

    }).catch(err=>{
        // console.log(err);
        res.status(200).json({message:"email n'existw pas"});
    })
    
}
// logout
module.exports.logout=async(req,res)=>{}


