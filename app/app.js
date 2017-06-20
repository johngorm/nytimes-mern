const React = require('react');

const ReactDOM = require('react-dom');

const routes = require('./config/routes.js');
console.log(routes);

ReactDOM.render(routes, document.getElementById('app'));