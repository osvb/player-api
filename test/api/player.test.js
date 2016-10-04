import { describe } from 'ava-spec';
import request from 'supertest-as-promised';
import { getAllElements, loadFixtures } from '../helpers';
import app from '../../src/app';

const fixtures = [
    'players'
];

const URI = '/players';

let dbObjects;

describe.serial('Player API', it => {
    it.beforeEach(() =>
        loadFixtures(fixtures)
            .then(() => getAllElements('Player'))
            .then(response => {
                dbObjects = response;
            })
    );

    it('should reitrieve a list of all players', async t => {
        const response = await request(app)
            .get(URI)
            .expect(200)
            .then(res => res.body);
        t.is(response.length, dbObjects.length);
    });

    it('should reitrieve a list of one players', async t => {
        const response = await request(app)
            .get(`${URI}/search?firstName=FirstName 1`)
            .expect(200)
            .then(res => res.body);
        t.is(response.length, dbObjects.length);
    });

    it('should return a single player', async t => {
        const fixture = dbObjects[0];
        const response = await request(app)
            .get(`${URI}/${fixture.id}`)
            .expect(200);
        t.is(response.body.name, fixture.name);
    });

    it('should return ResourceNotFound when retrieving nonexisting player', async t => {
        const fixture = dbObjects[0];
        const response = await request(app)
            .get(`${URI}/${fixture.id + 10000}`)
            .expect(404);
        t.is(response.body.name, 'ResourceNotFoundError');
        t.is(response.body.message, 'Could not find resource of type player');
    });

    it('should add a new player', async t => {
        const player = {
			    "firstName": "Firstname 4",
			    "lastName": "Lastname 4",
			    "email": "firstname.lastname@4.com",
			    "phoneNumber": "12345674"
        }
        const response = await request(app)
            .post(URI)
            .auth('admin', 'admin')
            .send(player)
            .expect(201);

        t.is(response.body.firstName, player.firstName);
    });

    it('should be able to update an player', async () => {
        const player = dbObjects[0];
        await request(app)
            .put(`${URI}/${player.id}`)
            .auth('admin', 'admin')
            .send({ name: 'changed' })
            .expect(204);
    });

    it('should be able to delete an player', async () => {
        const player = dbObjects[0];
        await request(app)
            .delete(`${URI}/${player.id}`)
            .auth('admin', 'admin')
            .expect(204);
    });
});
