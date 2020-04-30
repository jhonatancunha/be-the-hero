import { Router } from 'express';

// CONTROLLERS
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';

const routes = new Router();

// ONG ROUTES
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

// INCIDENTS ROUTES
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);

export default routes;
