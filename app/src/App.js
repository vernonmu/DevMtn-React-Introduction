import React, { Component } from 'react';
import './App.css';
import calculatorImage from './calculator.png'

class App extends Component {
  constructor(props) {
      super();
      this.state = {
        display: '0'
        , operator: ''
        , temp: 0
        , resetDisplay: false
      }

  }

  render() {
    return (
      <div id="App">
      <div id="container-main">
        <img className="remove-height" src={calculatorImage} alt="" />
        <div id="calculator-mask" className="remove-highlights">

        <div className="output">
          <span className="total"> {this.state.display}</span>
        </div>

        <div className="btn clear" onClick={ () => { this.clearDisplay(); }}></div>

        <div
          onClick={ () => { this.setDisplay('0'); } }
          className="btn zero"></div>
        <div
          onClick={ () => { this.setDisplay('1'); } }
          className="btn one"></div>
        <div
          onClick={ () => { this.setDisplay('2'); } }
          className="btn two"></div>
        <div
          onClick={ () => { this.setDisplay('3'); } }
          className="btn three"></div>
        <div
          onClick={ () => { this.setDisplay('4'); } }
          className="btn four"></div>
        <div
          onClick={ () => { this.setDisplay('5'); } }
          className="btn five"></div>
        <div
          onClick={ () => { this.setDisplay('6'); } }
          className="btn six"></div>
        <div
          onClick={ () => { this.setDisplay('7'); } }
          className="btn seven"></div>
        <div
          onClick={ () => { this.setDisplay('8'); } }
          className="btn eight"></div>
        <div
          onClick={ () => { this.setDisplay('9'); } }
          className="btn nine"></div>

        <div className="btn equal" onClick={ () => { this.calculate(); } }></div>
        <div className="btn multiply"
            onClick={ () => { this.setOperator('*'); } }></div>
        <div className="btn divide"
            onClick={ () => { this.setOperator('/'); } }></div>
        <div className="btn subtract"
            onClick={ () => { this.setOperator('-'); } }></div>
        <div className="btn add"
            onClick={ () => { this.setOperator('+'); } }></div>
      </div>
    </div>
    </div>
    )
  }

  setDisplay(num) {
    var display = ( this.state.display === '0' ) ? num : this.state.display + num;
    this.setState({ display: (this.state.display.length < 13 ) ? display : this.state.display });
  }

  setOperator(operator) {
    if (!this.state.operator) {
      this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' })
    }
  }

  calculate() {
    if ( this.state.temp === 0 ) { return; }
    var result;

    switch ( this.state.operator ) {
      case '+':
        result = this.state.temp + parseInt(this.state.display, 10);
        break;
      case '-':
        result = this.state.temp - parseInt(this.state.display, 10);
        break;
      case '*':
        result = this.state.temp * parseInt(this.state.display, 10);
        break;
      case '/':
        result = this.state.temp / parseInt(this.state.display, 10);
        break;
      default:
        break;
    }

    this.setState( {display: String(result)})
  }

  clearDisplay() {
    this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
  }

}


export default App;
