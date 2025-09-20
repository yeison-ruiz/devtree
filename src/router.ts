import { Router } from 'express';
import CreateAccount from './handler';

const router = Router();

 router.post ('/auth/register', CreateAccount)


export default router;