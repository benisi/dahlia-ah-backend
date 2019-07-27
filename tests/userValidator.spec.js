import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
import userMock from './mockdata/user';

chai.use(chaiHttp);

const { expect, should } = chai;
should();

const url = '/api/v1/users';

describe('A test to check for the successful signup of a valid user', () => {
  it('should return a status 200 on a valid user parameters', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.validUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('A test to check for user email address during signup validations', () => {
  it('should return a status 400 on invalid email', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.invalidEmail)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('email');
        done();
      });
  });
  it('should return a status 400 on an empty email', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.emptyEmail)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('email');
        done();
      });
  });
});

describe('A test to check for user first name during signup validations', () => {
  it('should return a status 400 on invalid first name', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.invalidFirstName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('firstName');
        done();
      });
  });
  it('should return a status 400 on an empty first name', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.emptyFirstName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('firstName');
        done();
      });
  });
});

describe('A test to check for user last name during signup validations', () => {
  it('should return a status 400 on invalid last name', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.invalidLastName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('lastName');
        done();
      });
  });
  it('should return a status 400 on an empty last name', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.emptyLastName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('lastName');
        done();
      });
  });
});

describe('A test to check for username during signup validations', () => {
  it('should return a status 400 on invalid username', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.invalidUserName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('userName');
        done();
      });
  });
  it('should return a status 400 on an empty username', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.emptyUserName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('userName');
        done();
      });
  });
});

describe('A test to check for password during signup validations', () => {
  it('should return a status 400 on invalid password', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.invalidPassword)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('password');
        done();
      });
  });
  it('should return a status 400 on an empty password', (done) => {
    chai.request(app)
      .post(url)
      .send(userMock.emptyPassword)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.errors[0].field).to.equal('password');
        done();
      });
  });
});
