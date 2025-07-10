const User=require('../Models/UserSchema');
const bcrypt=require('bcrypt');

exports.createUser=async(req,res)=>{
    try{
    const{userName,email,password}=req.body;

    console.log(req.body);

    const hashPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        userName,
        email,
        password:hashPassword
    });
    return res.status(201).json({
        message: "user created successfully",
        user: {
            id: user._id,
            userName: user.userName,
            email: user.email, 
            permissions: user.permissions
        }
    });
}
catch(error){
    console.error(error);
    return res.status(500).json({message:"server error",error:error.message});
}
} 