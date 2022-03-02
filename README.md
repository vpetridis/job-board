# Getting Started with Create React App

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
