import express from 'express';

import SignupController from '../controllers/signup.controller';
import {authenticate} from './helpers';

const controller = new SignupController();
export default bindSignupsToRoutes(controller);

function bindSignupsToRoutes(controller) {
	const router = express.Router();
  console.log(authenticate);
	router.get('/:id', controller.retrieveSignupsFromTournament);
  router.get('/list/', controller.list);
	router.post('/', authenticate, controller.create);
	router.delete('/:id', authenticate, controller.destroy);
	router.put('/:id', authenticate, controller.update);
	return router;
}
