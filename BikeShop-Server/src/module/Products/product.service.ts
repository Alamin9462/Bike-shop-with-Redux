import { IProduct } from "./product.interface"
import ProductModel from "./product.model"


const createProductToDB = async (payload: IProduct) => {
  const data = new ProductModel(payload)
  const result = await data.save()
  return result
}

const getProductToDB = async () => {
  const result = await ProductModel.find()
  return result
}

const getSingleProductToDB = async (id: string) => {
  const result = await ProductModel.findOne({id})
  return result
}

const updateProductToDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await ProductModel.findOneAndUpdate({id}, payload)
  return result
}

const deleteProductToDB = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({id})
  return result
}


export const ProductService = {
    createProductToDB,
    getProductToDB,
    getSingleProductToDB,
    updateProductToDB,
    deleteProductToDB,
 
}