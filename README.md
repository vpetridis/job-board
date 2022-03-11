# The project

This is a work in progress so far. Find out a nice design from [codewell.cc](https://www.codewell.cc/challenges/workside-job-board--61333de6a383e41090a3d413) and tried to implement it with a local fake server. Optimizations will happen gradually and code splitting will begin after I have an mvp.

The point of this challenge is to find out what working flow really suites my needs.

## So far...
I think developing with the raw data at first and then heading over to styling is much better. Many webDevs try to do the opposite (including my self). This exercise tries to find out the optimal way to develop an SPA.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Server

In order for the app to work you must first create a `.env` file with `REACT_APP_BASE_URL=http://localhost:3001` and start the mock server with `npm install -g json-server` if it's not installed and then`json-server --watch .\db.json --port 3001`. Don't use the default port since it's occupied for the React application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
