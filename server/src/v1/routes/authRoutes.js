import { Router } from 'express';
import Validators from '../middleware/Validators';
import UserController from '../controllers/userController';
import Verify from '../middleware/Verify';

const router = Router();

router.post('/signup', Validators.signUp, Verify.verifyNewUser, UserController.createNewUser);
router.post('/signin', Validators.login, Verify.verifyExistingUser, UserController.authUser);

export default router;
