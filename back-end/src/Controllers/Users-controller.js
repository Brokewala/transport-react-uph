const userModel=require("../Models/Users-model");

// get all user
module.exports.userGetAll=async(req,res)=>{
    userModel
        .find()
        .select("-password")
        .then(docs=>{
            res.status(200).json(docs);
    })
}
// get one user
module.exports.userGetOne=async(req,res)=>{
    const id=req.params.id;
    await userModel.findById(id).select("-password").then(docs=>{
        res.status(201).json(docs);
    }).catch(err=>{
        res.status(200).json({message:"id is not valide!"})
    })
}
// update image of user
module.exports.userImageUpdate=(req,res)=>{
    const id=req.params.id;
    const file=req.files.image;
    const name=new Date().getTime()+file.name;
    const dateName=`/uploads/users/${name}`;

     file.mv(`${__dirname}/../../../front-end/public/uploads/users/${name}`,async (err)=>{
        if(err){
            return res.status(500).send(err)
        }else{
            await userModel.findByIdAndUpdate({_id:id},{
                $set:{
                    image:dateName
                }
            },
            {new:true,upsert:true}
            ).then(docs=>{
                res.status(201).json(docs)
            }).catch(err=>{
                res.status(200).json({message:"user is not valide"})
            })
        }
    })
}
// 
module.exports.userAllUpdate=async(req,res)=>{
}
// 
module.exports.userOneDelete=async(req,res)=>{}
// 
module.exports.userAllDelete=async(req,res)=>{}
// 
module.exports.userPasswordUpdate=async(req,res)=>{}
// 
module.exports.userUsernameUpdate=async(req,res)=>{}