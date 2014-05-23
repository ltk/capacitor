var React = require('react');
var Link = require('./link.jsx');

var Navigation = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link className="navbar-brand" href="/">Capacitor</Link>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><Link href="/about">About</Link></li>
							<li><Link href="/contact">Contact</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Navigation;
