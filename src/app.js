/** @jsx React.DOM **/

var React  = require('react');
var Clock  = require('./views/clock');
var URL    = require('./views/url');

React.renderComponent(Clock(), document.querySelector("#app"));

console.log("Capacitor is fluxing");
