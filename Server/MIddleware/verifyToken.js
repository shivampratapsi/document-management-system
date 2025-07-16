const jwt=require('jsonwebtoken');

exports.verifyToken = async(req,res )=>{
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
        console.log("No valid token!");
        return res.status(401).json({message:"Not valid token!"});
    }

try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    next();
}
catch(error){
    console.log("Token not matched!");
    return res.status(403).json({message:"Token not matched!"});
}


}