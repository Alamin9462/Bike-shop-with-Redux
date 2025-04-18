import mongoose from "mongoose";
export interface IOrder {
    user: mongoose.Schema.Types.ObjectId
    products : mongoose.Schema.Types.ObjectId;
    quantity : number;
    totalPrice ?: number;
    productStatus ?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    
}
