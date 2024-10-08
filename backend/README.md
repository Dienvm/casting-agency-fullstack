# Casting Agency Fullstack

## Getting Started

### Installing Dependencies

#### Python 3.7

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Environment

We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organized. Instructions for setting up a virtual environment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within the `requirements.txt` file.

##### Key Dependencies

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) and [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) are libraries to handle the lightweight sqlite database. Since we want you to focus on auth, we handle the heavy lift for you in `./src/database/models.py`. We recommend skimming this code first so you know how to interface with the Drink model.

- [jose](https://python-jose.readthedocs.io/en/latest/) JavaScript Object Signing and Encryption for JWTs. Useful for encoding, decoding, and verifying JWTS.

## Running the server

From within the `./src` directory first ensure you are working using your created virtual environment.

Each time you open a new terminal session, run:

```bash
export FLASK_APP=api.py;
```

To run the server, execute:

```bash
flask run --reload
```

The `--reload` flag will detect file changes and restart the server automatically.

## Tasks

### Setup Auth0

1. Create a new Auth0 Account
2. Select a unique tenant domain
3. Create a new, single page web application
4. Create a new API
   - in API Settings:
     - Enable RBAC
     - Enable Add Permissions in the Access Token
5. Create new API permissions:
   - `get:actors`
   - `get:actors-detail`
   - `post:actors`
   - `patch:actors`
   - `delete:actors`
   - `get:movies`
   - `get:movies-detail`
   - `post:movies`
   - `patch:movies`
   - `delete:movies`
6. Create new roles for:
   - Casting Assistant
     - can `get:actors`
     - can `get:movies`
   - Casting Director
     - can `get:actors`
     - can `get:movies`
     - can `post:actors`
     - can `delete:actors`
     - can `patch:actors`
     - can `patch:movies`
   - Executive Producer
     - can perform all actions
7. Test your endpoints with [Postman](https://getpostman.com).
   - Register 3 users - assign the Casting Assistant, Casting Director and Executive Producer role to.
   - Sign into each account and make note of the JWT.
   - Import the postman collection `./backend/udacity-capstone-project`
   - Right-clicking the collection folder for barista and manager, navigate to the authorization tab, and including the JWT in the token field (you should have noted these JWTs).
   - Run the collection and correct any errors.
   - Export the collection overwriting the one we've included so that we have your proper JWTs during review!

## Testing

Write at least one test for the success and at least one error behavior of each endpoint using the unittest library.

Create the .env file
To deploy the tests, run

```bash
dropdb casting_agency_test
createdb casting_agency_test
```

```bash
python test_flaskr.py
```

### Test result

![Test result](./test_flaskr.png)

### User

<casting_assistant@gmail.com>/Abcd@1234
<casting_director@gmail.com>/Abcd@1234
<executive_producer@gmail.com>/Abcd@1234
