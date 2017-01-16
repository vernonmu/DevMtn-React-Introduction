import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			display: '0',
			total: 0,
			x: 0,
			y: 0,
			setDisplay: (num) => {
				var display;
				if ( this.state.display.length === 12 ) { return; }
				display = (this.state.display === '0') ? num : this.state.display + num;
				this.setState({ display: display });
			},
			clearDisplay: () => {
				this.setState({ display: '0', total: 0, x: 0, y: 0 });
			},
			add: () => {

			},
			subtract: () => {

			},
			multiply: () => {

			},
			divide: () => {

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
							<span className="total"> { this.state.display }</span>
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

						<div className="btn decimal"></div>
						<div className="btn equal"></div>
						<div className="btn multiply"></div>
						<div className="btn divide"></div>
						<div className="btn subtract"></div>
						<div className="btn add"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
