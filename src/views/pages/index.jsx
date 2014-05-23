var React = require('react');

var Index = React.createClass({
	render: function() {
		return (
			<section className="container">
				<div className="page-header">
					<h1>Index</h1>
				</div>
				<p>This is the <b>Index</b> page!</p>
			</section>
		);
	}
});

module.exports = Index;
