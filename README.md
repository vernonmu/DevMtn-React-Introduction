# DevMtn-React-Introduction

![calculator](https://github.com/devlemire/DevMtn-React-Introduction/blob/master/readme/finishedStyles.png "Finished Project")

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

[Click Me](http://pastebin.com/iBgbL3NQ)

## Step 2 - Assigning Variables to State
#### Summary
What is state? State is an object that can determine how components function. On this state object you can put however many properties you need and the entire component has access to them.

In order to start using state, our component needs a constructor function. This constructor function gives us access to props and also defines state values.
#### Detail
Just above the render function in App.js let's add a function called constructor. Before we can do anything with state we are required to call `super()` with or without a props parameter. Since we aren't doing anything with props on this main component we can just call `super()`. After calling `super()` we can use `this.state = {}` to start setting things on state. For this calculator to work we are going to need a couple variables and also some functions. For now let's focus on the variables.

Let's define in our state: `display: '0'`, `operator: ''`, `temp: 0`, and `resetDisplay: false`. Notice how display is a string and temp is an integer.
#### Code
````jsx
constructor(props) {
	super();
	this.state = {
		display: '0',
		operator: '',
		temp: 0,
		resetDisplay: false
	}
}
````
## Step 3 - Displaying Numbers
#### Summary
In this step we are going to see how elements in our `render()` have access to properties on state. We will create a function called `setDisplay()` that will allow us to click on the number buttons and see the number appear in the output of the calculator.
#### Detail
To start, let's take a look at our div with the className of output. Inside that div we have a span with the className of total. This element sits in the output section of our calculator.

Inside the span tags we can use `{ }` to 'break' out of JSX and use JavaScript. To access state we always use `{ this.state }`. In this case we want to use our display property so we will use `{ this.state.display }`.

With this current setup, any time we change `this.state.display` it will displayed in our span element. 

````jsx
<div className="output">
	<span className="total"> { this.state.display } </span>
</div>
````

Now we can create our function that will update our state property `display`. Since we want elements inside of our render function to have access to the setDisplay function we will create it as a property on state.
````jsx
this.state = {
	display: '0',
	operator: '',
	temp: 0,
	resetDisplay: false,
	setDisplay: (num) => {

	}
}
````

In react in order to trigger a function on a click event we use the attribute called `onClick={}`. Let's take a look at our div with the className of `btn one`.
````jsx
<div className="btn one"></div>
````

There is a little bit of a trick to this however. We cannot simply just add `onClick={ this.state.setDisplay(); }` because on render react will actually try to execute the function. If we want to get around this we can wrap this call inside of an arrow function. It would look like:
````jsx
<div className="btn one" onClick={ () => { this.state.setDisplay(); } }></div>
```` 
Now when react reads over this it is a function that is not being invoked and therefore will not be executed on render. We are still missing one piece. If we are going to be using this same function for all our number buttons, how will the function know which number was clicked? We can use a parameter of the number of the button:
````jsx
<div className="btn one" onClick={ () => { this.state.setDisplay('1'); } }></div>
```` 

Let's copy and paste `onClick={ () => { this.state.setDisplay('#'); } }` over to each number button and be sure to replace # with the number of the button. You can determine which div is which number based on its className.
````jsx
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
````
Great, all our number button elements are ready to start changing `this.state.display`. Let's code our setDisplay function. In react to change state we always use `this.setState({})`. Since we are getting the number passed in as a parameter we can use `num` to update `this.state.display`. The reason why `this.state.display` and the parameter we are passing are strings is so that we can use concatenation to update our calculator's display.
````jsx
setDisplay: (num) => {
	this.setState({ display: this.state.display + num });
}
````
#### Code
[App.js](http://pastebin.com/b1bSJGTB)

## Step 4 - Error Handling
#### Summary
In this step we will be tweaking our calculator to handle certain scenarios. If we click on our buttons we can see that our display now updates. However our calculator keeps the initial 0 and also doesn't account for length and can break out of its container.

![png](https://github.com/devlemire/DevMtn-React-Introduction/blob/master/readme/no-error-handle.png)