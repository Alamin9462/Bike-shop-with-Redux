import catchAsync from "../../app/utils/catchAsync"
import { OrderService } from "./order.service"
import sendResponse from "../../app/utils/sendResponse"
import httpStatus from 'http-status-codes';


const createOrder = catchAsync(async (req, res) => {
    const body = req.body
    const result = await OrderService.createOrder(body)

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Your order successfully",
        data: result,
    })
})


const getOrder = catchAsync(async (req, res) => {
    const result = await OrderService.getOrder();
    
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Getting order successfully",
        data: result,
    })
})

export const OrderController = {
    createOrder,
    getOrder
}