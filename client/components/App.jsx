import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rates: {},
      specificRates: {},
      isConverted: false
    }
  }

  componentDidMount(){

  }


  render() {
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
                <input type='number' className='form-control' placeholder='Enter amount to be converted'></input>
              </div> <br/>

              <span>
                <span> From </span>
                <select className='selectpicker' style={{marginLeft: 5}}>
                  <option>First</option>
                  <option>Second</option>
                  <option>Second</option>
                </select>
                <span style={{marginLeft: 10}}> To </span>
                <select className='selectpicker' style={{marginLeft: 5}}>
                  <option>First</option>
                  <option>Second</option>
                  <option>Second</option>
                </select>
              </span>

              <div style={{marginTop: '1.2em'}}>
                <button type='button' className='btn btn-primary'> Convert </button>
              </div> <br/>


            </div>

            {!this.state.isConverted ?
              <div className='col-md-12'>
                <hr/>
                <p className='lead'> This amount is equivalent to this amount</p>
              </div> : <p></p>
            }
          </div>

        </div>
      </div>
    )
  }
}
