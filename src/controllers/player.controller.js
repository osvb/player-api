import CRUD from './CRUD';
import db from '../models';

class ExampleController extends CRUD {
    constructor() {
        super(db.Player, 'example');
    }
}

export default ExampleController;
