import bigPromise from "../middlewares/bigPromise.js";


export const testProduct = bigPromise(async(req,res,next)=>{
    res.status(200).send("hey prod")
})