import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div id='App'>
				<div id="container-main">
					<img className="remove-highlight" src="./calculator.png" />
					<div id="calculator-mask">

						<div className="output">
							<span className="total remove-highlight"></span>
						</div>

						<div className="btn clear remove-highlight"></div>
						
						<div className="btn zero remove-highlight"></div>
						<div className="btn one remove-highlight"></div>
						<div className="btn two remove-highlight"></div>
						<div className="btn three remove-highlight"></div>
						<div className="btn four remove-highlight"></div>
						<div className="btn five remove-highlight"></div>
						<div className="btn six remove-highlight"></div>
						<div className="btn seven remove-highlight"></div>
						<div className="btn eight remove-highlight"></div>
						<div className="btn nine remove-highlight"></div>

						<div className="btn decimal remove-highlight"></div>
						<div className="btn equal remove-highlight"></div>
						<div className="btn multiply remove-highlight"></div>
						<div className="btn divide remove-highlight"></div>
						<div className="btn subtract remove-highlight"></div>
						<div className="btn add remove-highlight"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
