const User=require('../Models/UserSchema');
const bcrypt=require('bcrypt');

exports.createUser=async(req,res)=>{
    try{
    const{userName,email,password}=req.body;
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
    //password length check karna hai
    if(password.length<8){
        console.log("password must have length greater than 8");
        return res.status(400).json({message:"Must have 8 characters"});
    }
    const hashPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        userName,
        email,
        password:hashPassword,
        role:'viewer'
    });
    return res.status(201).json({
        message: "user created successfully",
        user: {
            id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role
        }
    });
}
catch(error){
    console.error(error);
    return res.status(500).json({message:"server error",error:error.message});
}
}




