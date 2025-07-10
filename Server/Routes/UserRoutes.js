const express=require('express');
const UserRoutes=express.Router();
const {signupAuth}=require('../MIddleware/signupAuth');
const {loginAuth}=require('../MIddleware/loginAuth');
const {createUser}=require('../Controllers/createUser');
const {loginUser}=require('../Controllers/loginUser');


UserRoutes.post('/signup',signupAuth,createUser)
UserRoutes.post('/login',loginAuth,loginUser)
module.exports=UserRoutes;


