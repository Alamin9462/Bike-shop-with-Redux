import mongoose from "mongoose";
import { IOrder } from "./order.interface";
import { Types } from 'mongoose';
import ProductModel from "../Products/product.model";
import OrderModel from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
    // create a transtion and rollback 

    const session = await mongoose.startSession();
    session.startTransaction()

    try{
        const {products, quantity} = payload;

        const findProduct = await ProductModel.findById(products);

        if(!findProduct){
            throw new Error('product not found')
        }

      const totalPrice = findProduct.price * quantity;
   

      payload.totalPrice = totalPrice;
      payload.productStatus = 'processing';


     if(findProduct.stock < quantity){
        throw new Error('Not enough product available')
     }
     
     const order = await OrderModel.create([payload], {session})
     console.log(order);

    const updateProduct = await ProductModel.findOneAndUpdate(order[0].products,{
        $inc:{
            stock : -quantity
        }}, { new: true, session});

        console.log(updateProduct);

        if(!updateProduct){
            throw new Error('Failed to update product')
        }

        await session.commitTransaction()
        await session.endSession()
        return order[0]

    } catch(error){
        await session.abortTransaction()
        await session.endSession()
        throw error
    }

    
}


export const OrderService = {
    createOrder
}