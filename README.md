# DevMtn-React-Introduction

![alt text](https://github.com/devlemire/DevMtn-React-Introduction/blob/master/readme/finished.png "Finished Project")

## Setup
For this setup we will be using create-react-app to quickly create our base for our react calculator project. To get started `npm install` or `yarn install` when in the root directory of the project. Be sure to also `sudo npm install -g create-react-app` to gain access to its CLI. Once everything is installed we're ready to create the project. 

In your terminal type in `create-react-app app` when in the root directory of the project. This process may take up to 5 minutes depending on your internet speed.
## Step 1 - Creating the layout for our main component
#### Summary
After create-react-app has finished, you'll notice we now have a folder named app in the root of our project. Change your directory, using your terminal, to inside of the app folder ( `cd app` ) so we can have access to the pre-defined scripts in the package.json. If we run `npm start` you should see your default browser pop-up and see the react landing page.

![alt text](https://github.com/devlemire/DevMtn-React-Introduction/blob/master/readme/initial-startup.png "Initial Startup")

If we look in our App.js we will see create-react-app created our first component for us. But we are going to alter it to make a calculator ( app -> public -> src -> App.js ). Earse everything in between the return of the render function. Your code should look like this:

````jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (

		);
	}
}

export default App;
````
#### Code 
Paste the following into the empty return and move calculator.png into the public folder ( app -> public ):
````jsx
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
````

Paste the following styles into ( app -> src -> index.css )
