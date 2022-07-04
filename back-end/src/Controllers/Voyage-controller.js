const voyageModel=require("../Models/Voyage-model");

// function ajoute voyage
module.exports.ajouteVoyage=async(req,res)=>{
    const newVoyageModel=new voyageModel(req.body);
    newVoyageModel.save().then(docs=>{
        res.send({message:"successFull!"})
    })
}