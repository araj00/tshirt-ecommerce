import bigPromise from "../middlewares/bigPromise.js";
import cloudinary from "cloudinary";
import Product from "../models/Product.js";
import  dotenv  from "dotenv"
dotenv.config();
import { WhereClause } from "../utils/whereClause.js";
// cloudinary.config({ 
//     cloud_name: 'doha4fkyu', 
//     api_key: '781879781462834', 
//     api_secret: 'Fkm9AE7852K5Y-DeyJcgmeKwnLs' 
//   });

cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

// export const testProduct = bigPromise(async(req,res,next)=>{
//     console.log(req.query)
//     return res.status(200).json({
//         "success":true,
//         "message":"test product"
//     })
// })

export const addProduct = bigPromise(async(req,res,next)=>{
    // images
    let imageArray = []
    console.log(req.files[0].path)
    // console.log(req)

    // check image files
    if(!req.files){
        return res.status(400).json({
            success:false,
            message:"Images are required !"
        })
    }

    
    //upload images
    if(req.files){
        for (let index = 0; index < req.files.length; index++) {
            
            let result = await cloudinary.v2.uploader.upload(req.files[index].path ,{
                folder:"products"
            })

            console.log(req.files[index])

            imageArray.push({
                id:result.public_id,
                secure_url:result.secure_url
            })
        }  
    }
    

    req.body.photos=imageArray;
    req.body.user=req.user.id

    const product = await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })

})

export const getAllProduct = bigPromise(async(req,res,next)=>{

    // products to render
    const resultPerPage = 1;
    const totalCountProduct = await Product.countDocuments()
    
    const productsObjs = await  new WhereClause(Product.find(),req.query).search().filter();
    let products = await productsObjs.base;
    let filteredProductNumber = products.length;

    // pagination
    productsObjs.pager(resultPerPage);
    products = await productsObjs.base.clone();

    res.status(200).json({
        success:true,
        products,
        filteredProductNumber,
        totalCountProduct
    })

})


export const adminGetAllProduct = bigPromise(async(req,res,next)=>{
    
})