import express, { Request, Response } from 'express';
const app = express();
const PORT = 8000;

interface User {
  id: number
  name: string
  email: string
  password: string
}

// Array<User> é a mesma coisa de User[]

app.use(express.json());
let users: Array<User> = [
  {
    id: 1,
    name: 'Vitor',
    email: 'teste1@teste.com',
    password: 'teste123',
  },
  {
    id: 2,
    name: 'Joana',
    email: 'teste2@teste.com',
    password: 'teste123',
  },
  {
    id: 3,
    name: 'Carol',
    email: 'teste3@teste.com',
    password: 'teste123',
  },
  // {
  //   id: 3,
  //   nome: 'Carol',
  //   email: 'teste3@teste.com',
  //   senha: 'teste123',
  // },
];

app.get('/user', (req: Request, res: Response) => {
  let result = users;
  if (req.query.name) {
    result =
      result.filter((user) => user.name === req.query.name) ||
      'Usuário não encontrado';
  }

  res.json({
    data: result,
  });
});

app.get('/user/:id', (req: Request, res: Response) => {
  const result =
    users.find((user) => user.id === parseInt(req.params.id, 10)) ||
    'Usuário não encontrado';

  res.json({
    data: result,
  });
});

app.post('/user', (req: Request, res: Response) => {
  users.push({
    id: users.length + 1,
    ...req.body,
  });
  res.json({
    msg: 'Usuário criado com sucesso',
  });
});

app.put('/user/:id', (req: Request, res: Response) => {
  users = users.map((user) => {
    if (user.id === Number(req.params.id)) {
      return {
        ...user,
        ...req.body,
      };
    }
    return user;
  });

  res.json({
    msg: 'Usuário atualizado com sucesso',
  });
});

app.delete('/user/:id', (req: Request, res: Response) => {
  users = users.filter((user) => user.id !== Number(req.params.id));

  res.json({
    msg: 'Usuário removido com sucesso',
  });
});

app.listen(PORT, () => {
  console.log(`API Parnaioca ON - port: ${PORT}`);
});
