import type { User, UserCreate, UserUpdate } from "./user.type";

export let users: Array<User> = [
  {
    id: 1,
    name: 'Vitor',
    email: 'teste1@teste.com',
    password: 'teste123',
    createdAt: '2025-07-15T23:59:48.747Z',
    updatedAt: '2025-07-15T23:59:48.747Z',
  },
  {
    id: 2,
    name: 'Joana',
    email: 'teste2@teste.com',
    password: 'teste123',
    createdAt: '2025-07-15T23:59:48.747Z',
    updatedAt: '2025-07-15T23:59:48.747Z',
  },
  {
    id: 3,
    name: 'Carol',
    email: 'teste3@teste.com',
    password: 'teste123',
    createdAt: '2025-07-15T23:59:48.747Z',
    updatedAt: '2025-07-15T23:59:48.747Z',
  },
  // {
  //   id: 3,
  //   nome: 'Carol',
  //   email: 'teste3@teste.com',
  //   senha: 'teste123',
  // },
];

const getAll = (name?: string) => {
  let result = users;
  if (name) {
    result =
      result.filter((user) => user.name === name) ||
      'Usuário não encontrado';
  }

  return result
}

const getById = (id: number) => {
  const result =
    users.find((user) => user.id === id) ||
    'Usuário não encontrado';

  return result
}

const save = (params: UserCreate) => {
  users.push({
    id: users.length + 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...params,
  });
}

const update = (id: number, params: UserUpdate) => {
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...params,
        updatedAt: new Date().toISOString(),
      };
    }
    return user;
  });
}

const destroy = (id: number) => {
  users = users.filter((user) => user.id !== id);
}

export default {
  getAll,
  getById,
  save,
  update,
  destroy
}