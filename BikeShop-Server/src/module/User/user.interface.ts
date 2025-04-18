import { Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type IUser = {
  _id: any;
  name: string;
  age: number;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  photo?: string | null;
  role?: 'customer' | 'admin';
  userStatus: 'active' | 'inactive';
};

export type TUserRole = keyof typeof USER_ROLE;
