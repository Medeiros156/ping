import express from 'express';
import { pingRoutes } from '../controllers/ping.js'


const router = express.Router();


router.get('/ping', pingRoutes);

// router.post('/', );
 
// router.get('/:id', );

// router.delete('/:id', );

// router.patch('/:id', );

export default router;