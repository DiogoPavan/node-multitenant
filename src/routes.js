import { Router } from 'express';

import connectionResolver from './middleware/connectionResolver';

import TenantController from './controller/TenantController';
import UserController from './controller/UserController';

import MigrateService from './services/MigrateService';

const routes = Router();

routes.post('/migrate', MigrateService.run);
routes.post('/tenant', TenantController.insert);
routes.get('/tenant/findall', TenantController.findAll);

routes.use(connectionResolver);

routes.get('/index', (req, res) => {
  return res.send(req.tenant);
});

routes.get('/user', UserController.findAll);
routes.post('/user', UserController.insert);

export default routes;
