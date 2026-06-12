import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
    try{
        console.log("req.userId =", req.userId);
console.log("req.body =", req.body);
        //const { userId, itemId, size } = req.body;
        const userId = req.userId;
const { itemId, size } = req.body;
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success:true, message:"Product Added To Cart."})

    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message})

    }
}

// update products in user cart
const updateCart = async (req, res) => {
    try{
      //  const { userId, itemId, size, quantity } = req.body;
        const userId = req.userId;
        const { itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success:true, message:"Cart Updated."})

    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// get user cart data
const getUserCart = async (req, res) => {

    try {

        console.log("REQ.USERID =>", req.userId);

        const userId = req.userId;

        if (!userId) {
            return res.json({
                success: false,
                message: "No userId found in request"
            });
        }

        const userData = await userModel.findById(userId);

        console.log("USER DATA =>", userData);

        if (!userData) {
            return res.json({
                success: false,
                message: "User not found in database"
            });
        }

        res.json({
            success: true,
            cartData: userData.cartData || {}
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });
    }
}


export {
    addToCart,
    updateCart,
    getUserCart
}