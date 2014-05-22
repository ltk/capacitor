var Router = require('director/build/director.min').Router;
var routes = require('./routes');
var router = Router(routes);

router.configure({ html5history: true });

module.exports = router;
