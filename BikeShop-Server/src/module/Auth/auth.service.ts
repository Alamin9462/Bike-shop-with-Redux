import AppError from '../../app/errors/AppError';
import UserModel from '../User/user.model';
import { TLoginUser } from './auth.interface';
import httpStatus from 'http-status';

const loginUser = async (payload: TLoginUser) => {
  console.log(payload);

  // checking if the user is exist
  const user = await UserModel.findOne({ email: payload?.email });
  console.log(user);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking if the password is correct
  const isPasswordMatched = await UserModel.findOne({
    password: payload?.password,
  });

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not matched!');
  }

  // Access Granted: Send AccessToken, RefereshToken

  return {};
};

export const AuthServices = {
  loginUser,
};
