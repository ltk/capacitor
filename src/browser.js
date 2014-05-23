var React   = require('react');
var History = require('./stores/history');
var Layout  = require('./views/layout.jsx');
var URL     = require('./views/url');

History.push(window.location.pathname);

window.addEventListener('popstate', function() {
	History.push(window.location.pathname);
});

React.renderComponent(Layout(), document.querySelector('#app'));
