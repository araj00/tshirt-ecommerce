import express from "express"
const router = express.Router()

// product controllers
import { addProduct, adminGetAllProduct, adminUpdateOneProduct, getAllProduct, getOneProduct, adminDeleteOneProduct } from "../controllers/productController.js"

// import middlewares 
import { isLoggedIn , customRole} from "../middlewares/userMiddlewares.js"

// import multer middlewares
import multer from "multer"
const upload = multer({ dest: 'uploads/' })

// user routes
// router.route("/testProduct").post(testProduct)
router.route("/products").get(getAllProduct)
router.route("/getOneProduct/:id").get(getOneProduct)

// admin routes
router.route("/admin/product/add").post(isLoggedIn, customRole('admin'),upload.array('photos',12), addProduct)
router.route("/admin/products").get(isLoggedIn, customRole('admin'), adminGetAllProduct)
router.route("/admin/updateOneProduct/:id").put(isLoggedIn, customRole('admin'),upload.array('photos',12), adminUpdateOneProduct)
router.route("/admin/deleteOneProduct/:id").delete(isLoggedIn, customRole('admin'),adminDeleteOneProduct)

export default router;