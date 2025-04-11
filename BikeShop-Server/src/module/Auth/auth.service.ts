import AppError from '../../app/errors/AppError';
import { IUser } from '../User/user.interface';
import UserModel from '../User/user.model';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import config from '../../app/config';

const register = async (payload: IUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  const user = await UserModel.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking the user active

  const userStatus = user?.userStatus;
  if (userStatus === 'inactive') {
    throw new Error('This user is blocked Account!!');
  }

  // password checking

  const matchedPassword = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!matchedPassword) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'invalid password! Please Enter currect Password',
    );
  }

  // create jwt token

  const jwtTokenPayload = {
    email: user?.email,
    role: user?.role,
  };

  const tokenGenarate = jwt.sign(
    jwtTokenPayload,
    config.jwt_access_secret as string,
    { expiresIn: '5d' },
  );

  const refreshToken = jwt.sign(
    jwtTokenPayload,
    config.jwt_refresh_secret as string,
    { expiresIn: '365d' },
  );

  return {
    tokenGenarate,
    refreshToken,
    user,
  };
};

const refreshToken = async (token: string) => {
  // check if the token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
    // function (err, decoded) {
    //   // err
    //   if (err) {
    //     throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    //   }
    //   // decoded undefined
    //   // console.log(decoded);

    //   const role = (decoded as JwtPayload).role;

    //   // check if role is included
    //   if (requiredRoles && !requiredRoles.includes(role)) {
    //     throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    //   }

    //   req.user = decoded as JwtPayload; // assign user to express

    //   next();
    // },
  ) as JwtPayload;

  const { email, iat } = decoded;

  const user = await UserModel.findOne({ email: email });

  // checking the user active
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking the user active
  const userStatus = user?.userStatus;
  if (userStatus === 'inactive') {
    throw new Error('This user is blocked Account!!');
  }

  // create jwt token
  const jwtTokenPayload = {
    email: user?.email,
    role: user?.role,
  };

  const tokenGenarate = jwt.sign(
    jwtTokenPayload,
    config.jwt_access_secret as string,
    { expiresIn: '5d' },
  );

  return {
    tokenGenarate,
  };
};

export const AuthServices = {
  register,
  login,
  refreshToken,
};
