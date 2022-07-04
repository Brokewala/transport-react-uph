const voyageModel=require("../Models/Voyage-model");

// function ajoute voyage
module.exports.ajouteVoyage=async(req,res)=>{
    const newVoyageModel=new voyageModel(req.body);
    await newVoyageModel.save().then(docs=>{
        res.send({message:"successFull!"})
    })
}

// get all voyage liate
module.exports.showAllvoyage=async()=>{
    voyageModel.find().then(docs=>{
        res.status(200).json(docs);
    })
}