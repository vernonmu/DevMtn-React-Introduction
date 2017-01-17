import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			display: '0',
			operator: '',
			temp: 0,
			resetDisplay: false,
			setDisplay: (num) => {
				var display;
				if ( this.state.resetDisplay ) {
					this.setState({ display: num, temp: 0, operator: '', resetDisplay: false });
				} else {
					display = ( this.state.display === '0' ) ? num : this.state.display + num;
					this.setState({ display: display })
				}
 			},
			clearDisplay: () => {
				this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
			},
			setOperator: (operator) => {
				if ( !this.state.operator ) {
					this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0' });
				}
			},
			calculate: () => {
				var result;
				if ( this.state.resetDisplay || this.state.temp === 0 ) { return; }

				switch( this.state.operator ) {
					case '+':
						result = parseInt(this.state.display, 10) + this.state.temp;
						break;
					case '-':
						result = parseInt(this.state.display, 10) - this.state.temp;
						break;
					case '*':
						result = parseInt(this.state.display, 10) * this.state.temp;
						break;
					case '/':
						result = parseInt(this.state.display, 10) / this.state.temp;
						break;
					default:
						break;
				}

				this.setState({ display: result, resetDisplay: true })
			}
		}
	}

	render() {
		return (
			<div id='App'>
				<div id="container-main">
					<img className="remove-highlight" src="./calculator.png" alt="calculator" />
					<div id="calculator-mask" className="remove-highlight">

						<div className="output">
							<span className="total"> { this.state.display } </span>
						</div>

						<div className="btn clear" 	onClick={ () => { this.state.clearDisplay(); }}></div>

						<div className="btn zero" 	onClick={ () => { this.state.setDisplay('0'); } }></div>
						<div className="btn one" 	onClick={ () => { this.state.setDisplay('1'); } }></div>
						<div className="btn two"	onClick={ () => { this.state.setDisplay('2'); } }></div>
						<div className="btn three"	onClick={ () => { this.state.setDisplay('3'); } }></div>
						<div className="btn four"	onClick={ () => { this.state.setDisplay('4'); } }></div>
						<div className="btn five"	onClick={ () => { this.state.setDisplay('5'); } }></div>
						<div className="btn six"	onClick={ () => { this.state.setDisplay('6'); } }></div>
						<div className="btn seven"	onClick={ () => { this.state.setDisplay('7'); } }></div>
						<div className="btn eight"	onClick={ () => { this.state.setDisplay('8'); } }></div>
						<div className="btn nine"	onClick={ () => { this.state.setDisplay('9'); } }></div>

						<div className="btn equal"		onClick={ () => { this.state.calculate(); } }></div>
						<div className="btn multiply"	onClick={ () => { this.state.setOperator('*'); } }></div>
						<div className="btn divide"		onClick={ () => { this.state.setOperator('/'); } }></div>
						<div className="btn subtract" 	onClick={ () => { this.state.setOperator('-'); } }></div>
						<div className="btn add"		onClick={ () => { this.state.setOperator('+'); } }></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
