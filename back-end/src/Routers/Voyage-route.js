const router=require("express").Router();
const voyage=require("../Controllers/Voyage-controller");

// router ajoute voyage
router.post("/addvoyage",voyage.ajouteVoyage);

module.exports=router;