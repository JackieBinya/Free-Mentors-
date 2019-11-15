import { Router } from 'express';
import UserController from '../controllers/UserController';
import Verify from '../middleware/Verify';
import Validate from '../middleware/Validators';

const router = Router();

router.patch('/:userId', Verify.verifyAuthUser, Verify.verifyAdmin, Validate.userJoiVal, Verify.checkUser, Verify.checkRole, UserController.changeRole);

export default router;
