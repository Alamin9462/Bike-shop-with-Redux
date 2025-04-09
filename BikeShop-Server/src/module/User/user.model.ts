import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },

    age: {
      type: Number,
      required: [true, 'Please enter your age'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    photo: String,
    
    role: {
      type: String,
      enum: ['customer', 'admin'],
      message: '{VALUE} is not valid, please provide a valid role',
      default: 'customer',
      required: true,
    },
    userStatus: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
      default: 'active',
    },

  },
  {
    timestamps: true,
  },
);

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
