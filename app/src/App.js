import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		this.state = {
			add_label: 'Add'
		}
	}

	render() {
		return (
			<div id='App'>
				<div id="container-main">
					<input id="input-task" />
					<button id="button-submit"> {this.state.add_label} </button>
				</div>
			</div>
		);
	}
}

export default App;
