import jwt from 'jsonwebtoken'

const adminAuth = async(req , res , next) => {
    try{

        console.log(req.headers.authorization);
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.email === process.env.ADMIN_EMAIL){
            next();
        }
        else{
            res.status(401).json({success:false , message:"Admin credentials do not match."});
        }
    }catch(error){
        console.log(error);
        res.status(401).json({success:false , message:error.message});
    }
}

export default adminAuth;