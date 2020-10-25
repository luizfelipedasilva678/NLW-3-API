import { Router } from 'express';
import OrphanageController from './controllers/OrphanagesController';
const routes = Router();

// MVC

// Model
// View
// Controllers

routes.post('/orphanages', OrphanageController.create);

export default routes;