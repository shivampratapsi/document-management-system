const express=require('express');
const UserRoutes=express.Router();
const {createUser}=require('../MIddleware/createUser');


UserRoutes.post('/signup',createUser)
module.exports=UserRoutes;

