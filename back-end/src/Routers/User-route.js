const router=require('express').Router();
const authController=require("../Controllers/Auth-controller");
const userController=require("../Controllers/Users-controller");

// authentification router
router.post("/signup",authController.signup);
router.post("/login",authController.login);
// user router
router.get("/",userController.userGetAll);
router.get("/:id",userController.userGetOne);
router.put("/imgUplaod/:id",userController.userImageUpdate);


module.exports=router;