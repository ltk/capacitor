var Router = require('route-recognizer').default;

var routes = new Router();

routes.add([{
	handler  : require('./views/pages/index.jsx'),
	path     : '/'
}]);

routes.add([{
	handler : require('./views/pages/about.jsx'),
	path    : '/about'
}]);

routes.add([{
	handler : require('./views/pages/contact.jsx'),
	path    : '/contact'
}]);

module.exports = routes;
