/** @jsx React.DOM **/
var React = require('react');

var Contact = React.createClass({
	render: function() {
		return (
			<section className="container">
				<div className="page-header">
					<h1>Contact</h1>
				</div>
				<p>This is the <b>Contact</b> page!</p>
			</section>
		);
	}
});

module.exports = Contact;
