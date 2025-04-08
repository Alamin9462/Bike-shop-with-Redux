import { Types } from "mongoose";

// export type UserName = {
//     firstName: string;
//     middleName: string;
//     lastName: string;
//   };

export type IUser = {
    name: string;
    email: string;
    password: string;
    role?: 'customer' | 'admin';
}