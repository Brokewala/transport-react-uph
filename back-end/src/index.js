const fileUpload=require('express-fileupload');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors =require("cors");
const mongoose=require('mongoose');
const express=require('express');
const app=express();
require('dotenv').config();


// connection bdd
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('Database is connected'))

// variable
const port=process.env.PORT;
const userRouter=require("./Routers/User-route");
const voyageRoute=require("./Routers/Voyage-route");
const RegionRoute=require("./Routers/Region-route");
const { checkUser, requireAuth } = require('./Middleware/Auth-middleware');

// use
const corsOption={
    origin:process.env.CLIENT_URL,
    credentials:true,
    'allowedHeaders':['sessionId','Content-Type'],
    'exposedHeaders':['sessionId'],
    'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue':false

}
app.use(cors(corsOption));
app.use(cookieParser());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// jwt
app.get("*",checkUser);
app.get("/jwtid",requireAuth,(req,res)=>{
    res.status(200).send(res.locals.user._conditions._id);
})

// router
app.use("/api/users",userRouter);
app.use("/api/voyage",voyageRoute);
// app.use("/api/region",RegionRoute);

// server
app.listen(port,()=>{
    console.log(`Server http://localhost:${port}`);
})