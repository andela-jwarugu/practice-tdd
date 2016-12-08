import React from 'react';
import request from 'superagent';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      base: '',
      symbol: '',
      currency: [],
      rates: {},
      specificRates: {},
      isConverted: false,
      amount: null,
      convertedAmount: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.baseChange = this.baseChange.bind(this);
    this.symbolChange = this.symbolChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({amount: event.target.value});
  }

  baseChange(event) {
    this.setState({base: event.target.value})
  }

  symbolChange(event) {
    this.setState({symbol: event.target.value})
  }

  handleClick() {
    request
      .get('http://localhost:3000/api/rates/currency?base='+ this.state.base + '&symbols=' + this.state.symbol)
      .then((res) => {
        this.setState({rates: res.body.rates, isConverted: true});
      }).catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    request
      .get('http://localhost:3000/api/rates')
      .then((res) => {
        this.setState({currency: Object.keys(res.body.rates)})
      }).catch(err => {
        console.log(err);
      })
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <nav className='navbar navbar-light bg-faded'>
          <h1 className='navbar-brand mb-0'>Forex Exchange</h1>
        </nav>
        <div className='row'>
          <div className='jumbotron col-md-8 offset-md-2' style={{marginTop: '1.2em'}}>
            <h4 className='display-8'> Get Started! </h4>
            <p className='lead'> Welcome to the best Currency Convertor </p>
            <hr />

            <div className='col-md-6 offset-md-3'>

              <div className='input-group'  style={{marginTop: '1.2em'}}>
                <input type='number' className='form-control' onChange={this.handleChange} placeholder='Enter amount to be converted'></input>
              </div> <br/>

              <span>
                <span> From </span>
                <select className='selectpicker' onChange={this.baseChange} style={{marginLeft: 5}}>
                  {this.state.currency.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
                <span style={{marginLeft: 10}}> To </span>
                <select className='selectpicker' onChange={this.symbolChange} style={{marginLeft: 5}}>
                  {this.state.currency.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </span>

              <div style={{marginTop: '1.2em'}}>
                <button type='button' className='btn btn-primary' onClick={this.handleClick}> Convert </button>
              </div> <br/>


            </div>

            {this.state.isConverted ?
              <div className='col-md-12'>
                <hr/>
                <p className='lead'> {this.state.base} {this.state.amount} is equivalent to {this.state.symbol} </p>
              </div> : <p></p>
            }
          </div>

        </div>
      </div>
    )
  }
}
