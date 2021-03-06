/**
 * Entrypoint for starting the server
 * @module index
 */
import Sequelize from 'sequelize';
import app from './app';
import config from './config';
import { handleError } from './components/errors';
import { migrateDB, syncDB } from './db-helpers';
import debug from 'debug'
const log = debug('osvb-payment:index');

/**
 * listen - Starts the server with the config given by the environment variables
 *
 * @function listen
 * @memberof  module:index
 */
function listen() {
    app.listen(config.port, () => {
        console.log('Express server listening on %d, in %s mode', // eslint-disable-line
            config.port, app.get('env'));
    });
}

let db;
if (config.nodeEnv === 'development' || config.nodeEnv === 'test') {
	log('Syncing DB, recreating all tables')
	db = syncDB({ force: true });
} else {
    db = migrateDB()
        .catch(Sequelize.DatabaseError, () => syncDB())
        .catch(handleError);
}

db.then(() => listen());
