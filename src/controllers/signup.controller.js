import eDebug from 'enchanted-debug';

import db from '../models';
import CRUD from './crud';

const {error} = eDebug('players-api');

class SignupController extends CRUD {
	constructor() {
		super(db.Signup, 'signup');
	}

	retrieveSignupsFromTournament(req, res, next) {
		const tournamentid = req.params.tournamentid;
		db.sequelize.query(createSql(), {model: Signup})
			 .catch(err => {
				error(err);
				 next();
			});
	}
}

export default SignupController;

function createSql(tournamentId) {
	return `SELECT * FROM signup where tournamentid = ${tournamentId}`;
}
