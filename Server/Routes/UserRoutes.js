const express=require('express');
const UserRoutes=express.Router();
const {createUser}=require('../MIddleware/createUser');
const {loginUser}=require('../MIddleware/login');


UserRoutes.post('/signup',createUser)
UserRoutes.post('/login',loginUser)
module.exports=UserRoutes;


