// import jwt from "jsonwebtoken";

// const authUser = async (req, res, next) => {
//     const {token} = req.headers.authorization ;
//     if(!token){
//         return res.json({success:false, message:'Not Authorized Login Again'})
//     }

//     try{
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     }catch(error){
//         console.log(error);
//         return res.json({success:false, message:error.message})
//     }
// }

// export default authUser;

import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.json({
                success: false,
                message: "Not Authorized Login Again"
            });
        }

        // Extract token from "Bearer TOKEN"
        const token = authHeader.split(" ")[1];

        const token_decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
console.log("TOKEN DECODE:", token_decode);
        req.userId = token_decode.id;

        next();

    } catch (error) {

        console.log(error);

        return res.json({
            success: false,
            message: error.message
        });
    }
}

export default authUser;