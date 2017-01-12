# DevMtn-React-Introduction

## Setup
Some modules provided in this setup for React may or may not be unfamiliar to you. I just wanted to take a quick second to explain some of the key features of this environment we will be using.
#### File Structure
Having a clean and maintainable work environment is key for development. Our current file structure is:
````
- public
  - dist
  - src
	- app
	  - app.js
	- index.html
- .babelrc
- .gitignore
- .bs-config.json
- .package.json
- .README.md
- .webpack.config.js
````
Why the public folder? Usually when creating a website you'll have a front-end and a back-end. It's a good idea to get into the habit of seperating the code for them. So even though there won't be a backend for this tutorial it doesn't hurt to use the same file structure. Also there are many different ways to structure your files to make them maintainable, this is just my way of doing so.

With this current file structure we can quickly determine where all our configuration files are ( the root of the directory ), where all our front-end files are ( public folder ), where all our source files are for editing the front-end ( public -> src folder ), and where our production (finished) files are ( public -> dist folder ). 
#### Webpack with Lite-Server
You may not know exactly how webpack and lite-server work, however I just wanted to briefly explain just how awesome they are. With them we can run two commands in the terminal that will open the default browser with our index.html for us, monitor any file changes, compile them, bundle them, and then reload our browser for us. It's the luxurious Mercedes of web development. 