import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide product name !"],
        trim:true, // additional space at name will be removed
        maxlength:[120,"Product name must not exceed 120 characters"]
    },
    price:{
        type:Number,
        required:[true,"Please provide price for your product"],
        maxlength:[5,"Product price should not be more than 5 digits"]
    },
    description:{
        type:Number,
        required:[true,"Please provide description for your product"]
    },
    photos:[{
        id:{
            type:String,
            required:true
        },
        secure_url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:Number, 
        required:[true,"Please select category from short-sleeves, long-sleeves, sweatshirt, hoodies"],
        enum:{
            values:["short-sleeves","long-sleeves","sweatshirt","hoodies"],
            message:"Please select among the following categories"
        }
    },
    brand:{
        type:String,
        required:[true,,"Please add a brand for clothing"]
    },
    ratings:{
        type:Number,
        default:0
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true
            },
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Product = mongoose.model("Product",productSchema)

export default Product;