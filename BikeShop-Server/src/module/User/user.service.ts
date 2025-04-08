import { IUser } from "./user.interface";
import UserModel from "./user.model";

const createUserToDB = async (payload:IUser) =>{
   const result = await UserModel.create(payload)
   return result
}


export const UserServices = {
    createUserToDB
}