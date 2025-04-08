import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { UserServices } from "./user.service";
import httpStatus from 'http-status-codes';

const createUSer = catchAsync(async (req, res)=>{
    const payload = req.body;
    const result = await UserServices.createUserToDB(payload);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "User created successfully",
        data: result,
    })
    
})


export const UserController = {
    createUSer
}