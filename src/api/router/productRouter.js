import { Router } from 'express';
import {  
    deleteProductImage,uploadProductImages,updateProductData ,
    deleteProduct,getProductByuId,getProductDetails,getProducts,
    uploadProduct,getHomePageProducts}  from '../controller/productController.js';
    
import { upload } from '../middleware/multerMiddleWare.js';

const productRouter = Router(); // Corrected the variable name to productRouter

// Route to upload product images
productRouter.route('/uploadproduct').post(upload.array('images'), uploadProduct);
productRouter.route('/updateproductdata').put(upload.array('images'), updateProductData);

//delet product
productRouter.route('/deleteproduct').post(upload.array('images'), deleteProduct);

//get products
productRouter.route('/getproductbyuid').get(upload.array('images'), getProductByuId);
productRouter.route('/getproductdetails').get(upload.array('images'), getProductDetails);
productRouter.route('/getproducts').get(upload.array('images'), getProducts);

productRouter.route('/gethomepageproducts').get(upload.array('images'), getHomePageProducts);

//product image
productRouter.route('/uploadproductimage').put(upload.array('images'), uploadProductImages);
productRouter.route('/deleteproductimage').delete(upload.array('images'), deleteProductImage);

// Export the router instance directly
export default productRouter;
