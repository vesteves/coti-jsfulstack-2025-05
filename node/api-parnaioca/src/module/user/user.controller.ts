import { Router, Request, Response } from 'express'
import userRepository from './user.repository'

export const router = Router()

router.get('/user', async (req: Request, res: Response) => {
  const result = await userRepository.getAll(req.query.name as string)

  res.json({
    data: result,
  });
});

router.get('/user/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10)
  const result = await userRepository.getById(id)

  res.json({
    data: result,
  });
});

router.post('/user', async (req: Request, res: Response) => {
  await userRepository.save(req.body)

  res.json({
    msg: 'Usuário criado com sucesso',
  });
});

router.put('/user/:id', async (req: Request, res: Response) => {
  await userRepository.update(Number(req.params.id), req.body)

  res.json({
    msg: 'Usuário atualizado com sucesso',
  });
});

router.delete('/user/:id', async (req: Request, res: Response) => {
  await userRepository.destroy(Number(req.params.id))

  res.json({
    msg: 'Usuário removido com sucesso',
  });
});

export default router