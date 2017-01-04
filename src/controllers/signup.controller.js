import eDebug from 'enchanted-debug';

import db from '../models';
import CRUD from './CRUD';

const {error} = eDebug('players-api');

class SignupController extends CRUD {
	constructor() {
		super(db.Signup, 'signup');
	}

	retrieveSignupsFromTournament(req, res, next) {
		const tournamentid = req.params.id;
		db.sequelize.query(createSql(tournamentid), {model: db.Signup})
			.then(dbRes => res.end(JSON.stringify(dbRes)))
			.catch(err => {
				error(err);
				 res.status(500).end(JSON.stringify(err));
			});
	}
}

export default SignupController;

function createSql(tournamentId) {
	return `SELECT * FROM signups where tournamentid = ${tournamentId}`;
}
