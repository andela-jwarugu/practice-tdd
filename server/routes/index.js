const rates = require('../controllers/rates');

module.exports = function(app) {
  app.get('/api/rates', rates.fetch);
  app.get('/api/rates/currency', rates.find);
}
