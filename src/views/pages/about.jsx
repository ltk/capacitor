/** @jsx React.DOM **/
var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<section className="container">
				<div className="page-header">
					<h1>About</h1>
				</div>
				<p>This is the <b>About</b> page!!</p>
			</section>
		);
	}
});

module.exports = About;
