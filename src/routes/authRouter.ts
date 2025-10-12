import { Router } from 'express';
import type { Request, Response } from 'express';

import UserViewModel from '../viewModel/UserViewModel.js';

const authRouter = Router();

authRouter.get('/login', (req: Request, res: Response) => {
  res.render('auth/login' , { title: 'Login' });
});


authRouter.get('/register', (req: Request, res: Response) => {
  res.render('auth/register' , { title: 'Register' });
});



authRouter.post('/register', (req: Request, res: Response) => {
  // Lógica de autenticação (exemplo simplificado)
  const { email, username, password } = req.body;
  UserViewModel.createUser(username ,password ,email).then(user => {
      res.json({ message: 'User created', user });
  }).catch(err => {
      res.status(500).json({ message: 'Error creating user', error: err.message });
  });
});

export default authRouter;