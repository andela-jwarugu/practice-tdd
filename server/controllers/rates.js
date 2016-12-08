const request = require('superagent');

module.exports = {
  fetch: function (req, res) {
    let base = req.query.base || 'USD';
    request
      .get('http://api.fixer.io/latest?base='+ base)
      .end((err, response) => {
        if(err) {
          res.status(500).send({
            message: 'Error occured while fetching data'
          })
        } else {
          let base = response.body.base;
          let rates = response.body.rates;
          res.status(200).send({
            base,
            rates
          })
        }
      })
  },

  find: function (req, res) {
    let symbols = req.query.symbols;
    let base = req.query.base || 'USD';

    request
      .get('http://api.fixer.io/latest?base='+ base +'&' + 'symbols=' + symbols)
      .end((err, response) => {
        if(err) {
          res.status(500).send({
            message: 'Error occured while fetching data'
          })
        } else {
          let base = response.body.base;
          let rates = response.body.rates;
          res.status(200).send({
            base,
            rates
          })
        }
      })
  }
}
