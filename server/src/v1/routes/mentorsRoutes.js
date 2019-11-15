import { Router } from 'express';
import Verify from '../middleware/Verify';
import MentorController from '../controllers/MentorController';
import Validate from '../middleware/Validators';

const router = Router();

router.use(Verify.verifyAuthUser);

router.get('/', MentorController.viewMentors);
router.get('/:mentorId', Validate.mentorJoiVal, MentorController.viewSpecificMentor);

export default router;
