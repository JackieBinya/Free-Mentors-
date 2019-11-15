import { Router } from 'express';
import Verify from '../middleware/Verify';
import Validate from '../middleware/Validators';
import SessionsController from '../controllers/SessionsController';

const router = Router();

router.use(Verify.verifyAuthUser);

router.post('/', Verify.verifyUser, Verify.verifyRole, Validate.session, Verify.checkMentor, Verify.verifySessionUnique, SessionsController.createSession);
router.patch('/:sessionId/accept', Verify.verifyMentor, Validate.sessionJoiVal, Verify.verifySession, Verify.verifyStatusAccept, SessionsController.acceptRequest);
router.patch('/:sessionId/reject', Verify.verifyMentor, Validate.sessionJoiVal, Verify.verifySession, Verify.verifyStatusDecline, SessionsController.declineRequest);

export default router;
