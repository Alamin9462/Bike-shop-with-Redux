import { IUser } from '../User/user.interface';
import UserModel from '../User/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const register = async (payload: IUser) => {
  const result = await UserModel.create(payload)
  return result
} 

const login = async (payload : {email:string, password:string}) => {
  const user = await UserModel.findOne({ email: payload?.email }).select('+password');
  
  if (!user) {
    throw new Error('This user is not found !')
  }
  
  // checking the user active 

  const userStatus = user?.userStatus;
  if (userStatus === 'inactive') {
    throw new Error('This user is blocked Account!!')
  }

  // password checking 

  const matchedPassword = await bcrypt.compare(
    payload?.password,
    user?.password
  )
 
  if(!matchedPassword){
    throw new Error('invalid password! Please Enter currect Password')
  }

  // create jwt token 

  const jwtTokenPayload = {
    email: user?.email,
    role: user?.role,
  }

  const tokenGenarate = jwt.sign(jwtTokenPayload, "secret", {expiresIn: '5d'});
  console.log(tokenGenarate);
  return {
    tokenGenarate, user
  }
};

export const AuthServices = {
  register,
  login
};
