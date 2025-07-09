const express=require('express');
const UserRoutes=express.Router();
const {createUser, loginUser}=require('../MIddleware/createUser');


UserRoutes.post('/signup',createUser)
UserRoutes.post('/login',loginUser)
module.exports=UserRoutes;


