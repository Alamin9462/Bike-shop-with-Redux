import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { AuthServices } from './auth.service';
import httpStatus from 'http-status';

const registationUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await AuthServices.register(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is registation in successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await AuthServices.login(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully',
    data: result?.user,
  });
});

export const AuthControllers = { loginUser,registationUser };
