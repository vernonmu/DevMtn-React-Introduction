import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
render() {
	return (
		<div id='App'>
			<div id="container-main">
				<input id="input-task" />
				<button id="button-submit"> Add </button>
			</div>
		</div>
	);
}
}

export default App;
