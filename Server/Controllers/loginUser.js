const { generateToken } = require('../utils/tokenGenerator');

exports.loginUser=async(req,res)=>{
    try{
        //yahan se loginAuth middleware user ko pass karega 
        const user = req.user; 
        
        // ab password sahi hai to jwt token generate hoga , neeche function se 
        const jwtToken = generateToken(user);
            
        return res.status(200).json({
            message: "Login ho gaye tum !",
            token: jwtToken
        });

    }
    catch(error){
        console.error("Something went wrong 😱 !",error);
        return res.status(500).json({message:"Server se contact nahi ho paaya abhi!"});
    }
} 