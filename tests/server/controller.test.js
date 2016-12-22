const expect = require('chai').expect;
const app = require('../../index');
const request = require('supertest')(app);

describe('api routes', () => {
  it('returns a list of forex exchange rates', (done) => {
    request
      .get('/api/rates?base=USD')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body).to.be.an.object;
        expect(res.body).to.have.keys('base', 'rates');
        expect(res.body.base).to.equal('USD');
        done();
      });
  });

  it('returns a list of forex exchange rates with a different base', (done) => {
    request
      .get('/api/rates?base=GBP')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body).to.be.an.object;
        expect(res.body).to.have.keys('base', 'rates');
        expect(res.body.base).to.equal('GBP');
        done();
      });
  });

  it('return a list of specific exchange rates', (done) => {
    request
      .get('/api/rates/currency?symbols=GBP')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body).to.be.an.object;
        expect(res.body).to.have.keys('base', 'rates');
        expect(res.body.rates).to.have.keys('GBP');
        expect(res.body.base).to.equal('USD');
        done();
      })
  })

  it('return a list of specific exchange rates with base defined', (done) => {
    request
      .get('/api/rates/currency?base=EUR&symbols=GBP')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body).to.be.an.object;
        expect(res.body).to.have.keys('base', 'rates');
        expect(res.body.rates).to.have.keys('GBP');
        expect(res.body.base).to.equal('EUR');
        done();
      })
  })

  it('return a list of specific exchange rates with more than one query', (done) => {
    request
      .get('/api/rates/currency?base=USD&symbols=GBP,EUR')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body).to.be.an.object;
        expect(res.body).to.have.keys('base', 'rates');
        expect(res.body.rates).to.have.keys('GBP', 'EUR');
        done();
      })
  })
})
