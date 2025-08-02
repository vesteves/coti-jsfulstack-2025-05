import { Router, Request, Response } from 'express'
import userRepository from './user.repository'

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const result = await userRepository.getAll(req.query.name as string)

  res.json({
    data: result,
  });
});

router.get('/:id', async (req: Request, res: Response) => {
  const result = await userRepository.getById(req.params.id)

  res.json({
    data: result,
  });
});

router.post('/', async (req: Request, res: Response) => {
  const result = await userRepository.save(req.body)

  res.json({
    msg: 'Usuário criado com sucesso',
  });
});

router.put('/:id', async (req: Request, res: Response) => {
  const result = await userRepository.update(req.params.id, req.body)

  if (result === null) {
    res.json({
      msg: 'Nenhum usuário atualizado',
    });
    return
  }

  res.json({
    msg: 'Usuário atualizado com sucesso',
  });
});

router.delete('/:id', async (req: Request, res: Response) => {
  const result = await userRepository.destroy(req.params.id)
  if (result.deletedCount === 0) {
    res.json({
      msg: 'Nenhum usuário foi removido',
    });
    return
  }

  res.json({
    msg: 'Usuário removido com sucesso',
  });
});

export default router