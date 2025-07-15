const User=require('../Models/UserSchema');
const { passwordStrength } = require('../utils/passwordStrength');

exports.signupAuth=async(req,res,next)=>{
    try{
    const{email,password}=req.body;

    console.log(req.body);

    //user ko check karna hai ki already exist karta hai ya nahi
    const existingUser=await User.findOne({email});
    if(existingUser){
        console.log("user is already has account!",existingUser);
        return res.status(400).json({message:"User existed 👁️👁️" });
    }

    //some valid email domains 
    const validDomains = [
        "@gmail.com",
        "@yahoo.com",
        "@outlook.com",
        "@hotmail.com",
        "@icloud.com",
        "@protonmail.com",
        "@zoho.com",
        "@mail.com",
        "@gla.ac.in"
    ];
    const domainCheck = validDomains.some(domain => email.endsWith(domain));
    if (!domainCheck) {
        console.log("Not permit other domains ! 🙅🏻");
        return res.status(400).json({ message: "Kindly use valid domains for registration! 🙅🏻" });
    }
   
    const checkpasswordStrength = await passwordStrength(password);
    if(!checkpasswordStrength){
        console.log("password is not strong enough");
        return res.status(400).json({message:"password is not strong enough"});
    }
    //agar sahi hai toh next controller me jayega
    next();
}
catch(error){
    console.error(error);
    return res.status(500).json({message:"server error",error:error.message});
}
} 