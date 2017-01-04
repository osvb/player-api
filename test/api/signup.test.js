import { describe } from 'ava-spec';
import request from 'supertest-as-promised';
import { getAllElements, loadFixtures } from '../helpers';
import app from '../../src/app';

const fixtures = [
    'tournaments',
    'signup',
    'players'
];

const URI = '/signup';

let tournamentObjects;

describe.serial('Signup API', it => {
    it.beforeEach(() =>
        loadFixtures(fixtures)
        .then(console.log.bind(console))
    );

    it('should reitrieve a list of all tournaments', async t => {
        const response = await request(app)
            .get(`${URI}/1`)
            .expect(200)
            .then(res => res.body);
        t.is(response, 5);
    });

    // it('should reitrieve a list of one tournaments', async t => {
    //     const response = await request(app)
    //         .get(`${URI}/search?name=Test1 Tournament`)
    //         .expect(200)
    //         .then(res => res.body);
    //     t.is(response.length, 1);
		// 		t.is(response[0].name, "Test1 Tournament");
    // });
    //
    // it('should return a single tournament', async t => {
    //     const fixture = tournamentObjects[0];
    //     const response = await request(app)
    //         .get(`${URI}/${fixture.id}`)
    //         .expect(200);
    //     t.is(response.body.name, fixture.name);
    // });
    //
    // it('should return ResourceNotFound when retrieving nonexisting tournament', async t => {
    //     const fixture = tournamentObjects[0];
    //     const response = await request(app)
    //         .get(`${URI}/${fixture.id + 10000}`)
    //         .expect(404);
    //     t.is(response.body.name, 'ResourceNotFoundError');
    //     t.is(response.body.message, 'Could not find resource of type tournament');
    // });
    //
    // it('should add a new tournament', async t => {
    //     const signup = {
    //       tournamentid: 1,
    //       spiller1id: 1,
    //       spiller2id: 2,
    //       paid: 200,
    //       date: ""
		// 		};
    //     const response = await request(app)
    //         .post(URI)
    //         .auth('admin', 'admin')
    //         .send(signup)
    //         .expect(201);
    //
    //     t.is(response.body.name, tournament.name);
    // });
    //
    // it('should be able to remove an signup', async () => {
    //     const signup = signupObjects[0];
    //     await request(app)
    //         .put(`${URI}/${signup.id}`)
    //         .auth('admin', 'admin')
    //         .send({ name: 'changed' })
    //         .expect(204);
    // });
    //
    // it('should be able to delete an signup', async () => {
    //     const signup = signUp[0];
    //     await request(app)
    //         .delete(`${URI}/${signup.id}`)
    //         .auth('admin', 'admin')
    //         .expect(204);
    // });
});
