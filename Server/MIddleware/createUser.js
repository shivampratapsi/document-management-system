const User=require('../Models/UserSchema');

exports.createUser=async(req,res)=>{
    try{
    const{userName,email,password,role}=req.body;
    console.log(req.body);

    //user ko check karna hai ki already exist karta hai ya nahi
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"User existed",});

    }
//password length check karna hai
    if(password.length<8){
        return res.status(400).json({message:"Must have 8 characters"});

}
const hashPassword=await bcrypt.hash(password,10);

const user=await User.create({
    userName,
    email,
    password:hashPassword,
    role:'viewer'
});
return res.status(201).json({message:"user created successfully",user:{
    id:user._id,
    userName:user.userName,
    email:user.email,
    role:user.role}
});
}
catch(error){
    console.error(error);
    return res.status(500).json({message:"server error",error:error.message});
}
}





//     try{
//         const {name,email,password}=req.body;
//         const user=await User.create({name,email,password});
//         res.status(201).json({message:"User created successfully",user});
//     }
//     catch(error){
//         res.status(500).json({message:"Internal server error",error:error.message});
//     }
// }