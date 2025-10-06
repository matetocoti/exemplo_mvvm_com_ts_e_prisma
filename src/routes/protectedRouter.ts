import { Router } from 'express';
import type { Request, Response } from 'express';


const protectedRouter = Router();

protectedRouter.get('/dashboard', (req: Request, res: Response) => {
    res.render('protected/index', { title: 'lists' });
});

export default protectedRouter;