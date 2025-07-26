import type { User, UserCreate, UserUpdate } from "./user.type";
import { userModel } from './user.model'

const getAll = async (name?: string) => {
  if (name) {
    return await userModel.find({ name })
  }

  return await userModel.find()
}

const getById = async (_id: number) => {
  return await userModel.findById(_id)
}

const save = async (params: UserCreate) => {
  return await userModel.create(params)
}

const update = async (_id: number, params: UserUpdate) => {
  return await userModel.findOneAndUpdate({ _id }, params)
}

const destroy = async (_id: number) => {
  return await userModel.deleteOne({ _id })
}

export default {
  getAll,
  getById,
  save,
  update,
  destroy
}
