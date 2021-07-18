### Colabook
Colabook is a 20 room booking system for a single day event.

### Development considerations
This product is to be used for just 1 days (although it could be assumed it would be annual, so 1 day every year)
to book just 20 rooms in 1 hour slots. There is no user management/authentication required and traffic on the application will be low.

Therefore, complex messaging systems, microservices or kubernetes esq architecture is overkill. 
Certainly a simple monolithic service would suit the requirements much better.

The application consists of a react frontend application, a single api and a single database table.

### Designs
Sketch was used to create some rough designs/wireframes to base the application on.
(sketch files and logo assets are available in the `design` directory).

![alt text][screen1]
![alt text][screen2]
![alt text][screen3]

[screen1]: https://github.com/atmd83/colabook/raw/main/design/screen-1.png "Logo Title Text 2"
[screen2]: https://github.com/atmd83/colabook/raw/main/design/screen-2.png "Logo Title Text 2"
[screen3]: https://github.com/atmd83/colabook/raw/main/design/screen-3.png "Logo Title Text 2"

### api endpoints
| Path        | Verb           | Use  |
| ------------- |:-------------:| -----:|
| `/availability/:brand`      | GET | Returns the list of times still available for that brand |
| `/availability/:brand/:time`      | GET      |   Returns the list of rooms still available for that brand at that time |
| `/booking` | POST      |  Create a booking |
| `/booking/:id` | DELETE     |    Cancel a booking |
| `/booking/:email` | GET      |    Get bookings for that users by email |


### Install
- `yarn`

### Running in development mode
- `yarn start:mock`
This runs the UI against a mock api, both have hot reloading so any changes are automatically shown, no need to stop the server and restart.
  
> The mock api server just returns content from the `data` directory, which contains json files you can edit to give you the required response.
> You can run the mock api server with the env var ERRORS=true set, this will return 500 error from all endpoints.

### Running in production mode
- `yarn start`
This builds an optimised version of the UI and api and serves the content with express.

### Database
The project uses a sql database that stores just one simple table. Using knex you can migrate and seed the database.

### CI/CD Pipeline
The project is stored in github at: https://github.com/atmd83/colabook.

When the code is updated in the repo on the 'main' branch, it automatically triggers the CI/CD pipeline in Heroku and automatically deploys the site to production.

The production url is: https://colabook.herokuapp.com/

#### Anything else?
The .env files and sqlite3 database file is included in the repo just for easy of assessment.
Normally they'd be ignored.

The build directory is included here again for easy of assessment.
In reality the api and UI would be separate repo's unless a true monolith, and the UI would have its own build steps with env vars injected at build time.
This is done locally using `yarn build-ui` in this project for sake of time.

It's arguable that this requires no UI js framework and can all be server rendered, but the data binding makes for a better use experience.


