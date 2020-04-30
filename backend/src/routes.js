import { Router } from 'express';

// CONTROLLERS
import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = new Router();

// ONG ROUTES
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

// INCIDENTS ROUTES
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
// OTHER ROUTE ABOUT INCIDENT
// THIS ONE IS TO LIST ALL INCIDENTS OF ONE ONG
routes.get('/profile', ProfileController.index);

// SESSION ROUTES
routes.post('/sessions', SessionController.store);
export default routes;
