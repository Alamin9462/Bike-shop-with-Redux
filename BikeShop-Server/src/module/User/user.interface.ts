import { Types } from "mongoose";

// export type UserName = {
//     firstName: string;
//     middleName: string;
//     lastName: string;
//   };

export type IUser = {
    name: string;
    age: number;
    email: string;
    password: string;
    photo?: string | null;
    role?: 'customer' | 'admin';
    userStatus: 'active' | 'inactive'
}