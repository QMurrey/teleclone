import mongoose from 'mongoose';

export interface IUser{
  username: string;
  fullname: string;
  email: string;
  avatar?: string;
}

export interface IUserDocument extends IUser, mongoose.Document{
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 1,
    maxLength: 20,
  },
  fullname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: "",
  }
}, {
  // createdAt, updatedAt
  timestamps: true
})

const User:mongoose.Model<IUserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;