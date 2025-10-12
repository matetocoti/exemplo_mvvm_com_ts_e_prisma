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


authRouter.post('/login', (req: Request, res: Response) => {
  // Lógica de autenticação (exemplo simplificado)
  const { email, password } = req.body;
  UserViewModel.logIn(email ,password).then(token => {
      if(token) {
          res.json({ message: 'Login successful', token });
      } else {
          res.status(401).json({ message: 'Invalid credentials' });
      }
  }).catch(err => {
      res.status(500).json({ message: 'Error during login', error: err.message });
  });
});

authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    // Cria o usuário
    await UserViewModel.createUser(username, password, email);
    res.redirect('/auth/login');
  } catch (err: any) {
    res.status(500).json({
      message: 'Error creating user',
      error: err.message
    });
  }
});

export default authRouter;