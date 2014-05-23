var Router = require("../lib/router");

var router = new Router();

router.match(function(map) {
	map('/', require('./views/pages/index.jsx'));
	map('/about', require('./views/pages/about.jsx'));
	map('/contact', require('./views/pages/contact.jsx'));
});

module.exports = router;
