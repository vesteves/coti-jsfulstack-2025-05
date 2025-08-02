import mongoose from 'mongoose'
import { User } from './user.type'

const userSchema = new mongoose.Schema<User, mongoose.Model<User>>({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export const userModel = mongoose.model('users', userSchema)