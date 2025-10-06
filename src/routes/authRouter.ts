import { Router } from 'express';
import type { Request, Response } from 'express';

const authRouter = Router();

authRouter.get('/login', (req: Request, res: Response) => {
  res.send('Login Page');
});

export default authRouter;