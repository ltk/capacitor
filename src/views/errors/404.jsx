var React = require('react');

var Missing = React.createClass({
	render: function() {
		return (
			<section className="container">
				<div className="page-header">
					<h1>404</h1>
				</div>
				<h2>The page you requested could not be found.</h2>
			</section>
		);
	}
});

module.exports = Missing;
