const jwt=require("jsonwebtoken");
const userModel=require("../Models/Users-model");

// check user 
module.exports.checkUser=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.TOKEN_SECRET,async (err,decodedToken)=>{
            if(err){
                res.locals.user=null;
                res.cookie('jwt','',{maxAge:1});
                next();
            }else{
                let user=userModel.findById(decodedToken.id);
                res.locals.user=user;
                next();
            }
        })
    }else{
        res.locals.user=null;
        next();
    }

}
// require authentification
module.exports.requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.TOKEN_SECRET,(err,decodedToken)=>{
            if(err){
                res.status(200).json("noToken")
            }else{
                next();
            }
        })
    }
}
