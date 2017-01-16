# DevMtn-React-Introduction

![calculator](https://github.com/devlemire/DevMtn-React-Introduction/blob/master/readme/finishedStyles.png, "Finished Project")

## Setup
For this setup we will be using create-react-app to quickly create our base for our react calculator project. To get started `npm install` or `yarn install` when in the root directory of the project. Be sure to also `sudo npm install -g create-react-app` to gain access to its CLI. Once everything is installed we're ready to create the project.

In your terminal type in `create-react-app app` when in the root directory of the project. This process may take up to 5 minutes depending on your internet speed.
## Step 1 - Creating the layout for our main component
#### Summary
After create-react-app has finished, you'll notice we now have a folder named app in the root of our project. Change your directory, using your terminal, to inside of the app folder ( `cd app` ) so we can have access to the pre-defined scripts in the package.json. If we run `npm start` you should see your default browser pop-up and see the react landing page.

![alt text](https://github.com/devlemire/DevMtn-React-Introduction/blob/master/readme/initalReact.png "Initial Startup")

If we look in our App.js we will see create-react-app created our first component for us. But we are going to alter it to make a calculator ( app -> public -> src -> App.js ). Erase everything in between the return of the render function. Also let's remove the logo import since we won't be using it. Your code should look like this:

````jsx
import React, { Component } from 'react';
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
		<div id="calculator-mask" className="remove-highlight">

			<div className="output">
				<span className="total"></span>
			</div>

			<div className="btn clear"></div>

			<div className="btn zero"></div>
			<div className="btn one"></div>
			<div className="btn two"></div>
			<div className="btn three"></div>
			<div className="btn four"></div>
			<div className="btn five"></div>
			<div className="btn six"></div>
			<div className="btn seven"></div>
			<div className="btn eight"></div>
			<div className="btn nine"></div>

			<div className="btn decimal"></div>
			<div className="btn equal"></div>
			<div className="btn multiply"></div>
			<div className="btn divide"></div>
			<div className="btn subtract"></div>
			<div className="btn add"></div>
		</div>
	</div>
</div>
````

Paste over index.css with the following styles ( app -> src -> index.css )

[Click Me](http://pastebin.com/1ps5qBUP)

## Step 2 - Using State
#### Summary
What is state? State is an object that can determine how components function. On this state object you can put however many properties you need and the entire component has access to them.


In order to start using state, our Component needs a constructor function. This constructor function gives us access to props and also defines state values.
#### Detail
Just above the render function in App.js let's add a function called constructor. Before we can do anything with state we are required to call super() with or without a props parameter. Since we aren't doing anything with props on this main component we can just call super(). After calling super() we can use this.state = {} to start setting things on state. For this calculator to work we are going to need a couple variables.

Let's define in our state: `total`, `x`, `y`, and `display` and set them all with an initial value of `0`.
#### Code
````jsx
constructor(props) {
	super();
	this.state = {
		display: 0,
		total: 0,
		x: 0,
		y: 0
	}
}
````
