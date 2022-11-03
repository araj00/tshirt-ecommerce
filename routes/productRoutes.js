import express from "express"
const router = express.Router()

// product controllers
import { addProduct, getAllProduct } from "../controllers/productController.js"

// import middlewares 
import { isLoggedIn , customRole} from "../middlewares/userMiddlewares.js"

// import multer middlewares
import multer from "multer"
const upload = multer({ dest: 'uploads/' })

// user routes
// router.route("/testProduct").post(testProduct)
router.route("/products").get(getAllProduct)

// admin routes
router.route("/admin/product/add").post(isLoggedIn, customRole('admin'),upload.array('photos',12), addProduct)

export default router;