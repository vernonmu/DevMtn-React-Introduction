import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			x: 0,
			y: 0,
			total: 0
		}
	}

	render() {
		return (
			<div id='App'>
				<div id="container-main">
					<img src="./calculator.png" />
				</div>
			</div>
		);
	}
}

export default App;
