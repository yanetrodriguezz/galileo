import express from 'express';
import { index, show, create, update } from '../controllers/carrera_controller';
import { withErrorHandling } from './utils';
const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));

export default router;
