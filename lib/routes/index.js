import express from 'express';
import carreras from './carreras';
import roles from './roles';
import materias from './materias';
import usuarios from './usuarios';


const router = express.Router();
router.use('/carreras', carreras);
router.use('/roles', roles);
router.use('/materias', materias);
router.use('/usuarios', usuarios);
router.use('/carreras', carreras);


export default router;
