import { Router } from 'express';

// CONTROLLERS
import OngController from './controllers/OngController';

const routes = new Router();

// ONG ROUTES
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

export default routes;
