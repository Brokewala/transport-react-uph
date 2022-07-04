const router=require("express").Router();
const voyage=require("../Controllers/Voyage-controller");

// router ajoute voyage
router.post("/addvoyage",voyage.ajouteVoyage);
// router get all router
routet.get("/",voyage.showAllvoyage);

module.exports=router;