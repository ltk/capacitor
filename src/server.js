require('node-jsx').install({
	harmony: true,
	extension: '.jsx'
});

var React  = require('react');
var fs     = require('fs');
var Layout  = require('./views/layout');
var express = require('express');
var url = require("url");
var app = express();
var routes = require('./routes');
app.use(express.static(__dirname + '/../'));

app.get('/*', function(req, res) {
	fs.readFile(__dirname + '/../index.html', function(err, content) {
		res.set({
			'Content-Type': 'text/html'
		});

		var props = routes.resolve(req.url);
		var view = React.renderComponentToString(Layout(props));

		res.end(content.toString().replace('{{app}}', view));
	});
});

app.listen(3000, function() {
	console.log("server is listening on 3000");
});

var spawn = require('child_process').spawn;
var watchify = spawn('npm', ['start'])

watchify.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

watchify.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

watchify.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
