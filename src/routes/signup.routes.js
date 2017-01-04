import express from 'express';

import SignupController from '../controllers/signup.controller';
import {authenticate} from './helpers';

const controller = new SignupController();
export default bindSignupsToRoutes(controller);

function bindSignupsToRoutes(controller) {
	const router = express.Router();
	router.get('/', controller.notImplementedYet);
	router.get('/:id', controller.retrieveSignupsFromTournament);
	router.post('/', authenticate, controller.create);
	router.delete('/:id', authenticate, controller.destroy);
	router.put('/:id', authenticate, controller.update);
	return router;
}
