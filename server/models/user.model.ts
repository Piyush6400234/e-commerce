import mongoose, { Document } from "mongoose";

export interface IUser {
  fullname: string;
  email: string;
  password: string;
  address: string;
  contact: Number;
  city: string;
  country: string;
  profilePicture: string;
  admin: boolean;
  lastLogin?: Date;
  isVerified?: boolean;
  resetPasswordToken?: string;
  resetPasswordTokenExpiresAt?: Date;
  verificationToken?: string;
  verificationTokenExpiresAT?: Date;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      default: "Update your address",
    },
    city: {
      type: String,
      default: "Update your city",
    },
    country: {
      type: String,
      default: "Update your country",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    admin: {
      type: Boolean,
      default: false,
    },
    // Advanced authentication
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAT: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
