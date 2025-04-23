import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { ProductService } from './product.service';
import httpStatus from 'http-status-codes';

const createProduct = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await ProductService.createProductToDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});
const getProduct = catchAsync(async (req, res) => {
  const result = await ProductService.getProductToDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product getting successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  console.log(req.params);
  const productId = req.params.productId;

  const result = await ProductService.getSingleProductToDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User getting successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  const body = req.body;
  const result = await ProductService.updateProductToDB(productId, body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductService.deleteProductToDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
