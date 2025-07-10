const User=require('../Models/UserSchema');
const bcrypt=require('bcrypt');

exports.loginAuth=async(req,res,next)=>{

    try{
        const {email, password}=req.body;
        console.log(email,password);
        
        if(!email || !password){
            return res.status(400).json({message:"Email & password must not be empty"});
        }
        const user=await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"Aap ho kaun ?"});
        }

        const isCorrectPassword=await bcrypt.compare(password, user.password);

        if(isCorrectPassword){
            // agar password sahi hai to user  agle middleware me jaayega jo loginUser(controllers)   
            req.user = user;//user object ko pass karega 
            next();
        }
        else{
            return res.status(401).json({message:"Please check your password !"});
        }

    }
    catch(error){
        console.error("Something went wrong 😱 !",error);
        return res.status(500).json({message:"Server se contact nahi ho paaya abhi!"});
    }
} 