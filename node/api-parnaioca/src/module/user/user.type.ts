import type { DBase } from '../../types/db.type'

// Array<User> é a mesma coisa de User[]
interface UserBase {
  name: string
  email: string
  password: string
}

export type User = UserBase & DBase

export type UserCreate = UserBase

export type UserUpdate = Partial<UserBase>

// export interface UserUpdate {
//   name?: string
//   email?: string
//   password?: string
// }