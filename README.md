# Player API

Du vil sikkert ikke sette opp dette lokalt, men heller gå til
spiller.test.api.osvb.no for å ha et api og test mot når du utvikler andre biter.

Under følger en forklaring på hvordan du skal sette dette opp, men er litt mer avansert enn de andre forklaringene. 

## Usage (Clients)

### Player object
```js
{
  firstName:
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
  },
  lastName: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
  },
  phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
  },
  rankingPoints: {
      type: DataTypes.STRING,
      unique: false,
      defaultValue: 0,
      allowNull: false
  }
}
```
E.g:
```json
{
	"firstName": "John",
	"lastName": "Doe",
	"email": "no-mail@example.com",
	"phoneNumber": "12345678"
}
```

### Endpoints

* `GET /players`
 Returns a list of player object

* `GET /players/:id`
Returns one player object with the error.

* `POST /players/`
Expect a body with an player object, and the `Content-Type` header field set to `application:json`

* `PUT /players/:id`
Expect a body with some of the fields from the player object, and the `Content-Type` header field set to `application:json`

* `DELETE /players/:id`
delete the resource

* `GET /players/search/?field=value`
Search for players.

## Development
### Database
To setup the project locally install Postgres and set `PG_URL ` to your database. The format should `postgres://USERNAME:PASSWORD@localhost/DB`. The capitalized words should be replaced with your own values.

To export your variable on a Unix-system, simply use the `export` command, i.e. `export PG_URL=your value`.

### Local production environment
Run `npm run build` to get a transpiled version of the API, then start with `npm start`.

### Local development environment
If you're gonna develop:

1. Install nodemon `npm install -g nodemon`
2. Run  `npm run start:dev` Remember that you can run it with environment variables in before the command, i.e. `PG_URL=value npm run start:dev`.

This will watch for changes and keep the application open for you.

## Usage

1. Create your models with Sequelize and place in `models/`. Look at the example for inspiration.
2. Create a controller for the new entity by extending the common CRUD controller. See `controllers/example.controller.js`
3. Create routes for the entity, see `routes/example.routes.js`.
4. Rename the namespace in line 7 of `models/index.js`

That's about it.

## Tests

### Single run

* Run unit tests & code lint with `npm test`. This will use your local database.
* Run just unit tests with `npm run tests` with `NODE_ENV=test`. This will use your local database.

### Watch

Run the unit tests continuously with `npm run test:watch`, only the tests currently worked on will run when updated.
All tests will run when a server file is updated. This will use your local database.

## Credit
Thanks to [essoen](https://github.com/essoen) for a [good boilerplate](https://github.com/essoen/express-api-boilerplate)
