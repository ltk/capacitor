var React = require('react');
var Clock = require('./views/clock');

React.renderComponent(Clock(), document.querySelector("#app"));

console.log("Capacitor is fluxing");
