/** @jsx React.DOM **/
var React          = require('react');
var HistoryActions = require('../actions/history');

var Link = React.createClass({
	getDefaultProps: function() {
		return {
			className : '',
			href      : null,
			target    : null,
			push      : true
		}
	},

	render: function() {
		return (
			<a className={this.props.className}
			   target={this.props.target}
			   href={this.props.href}
			   onClick={this._onClick}>{this.props.children}</a>
		);
	},

	_onClick: function(event) {
		if (!this.props.push) return;
		event.preventDefault();
		HistoryActions.push(this.props.href);
	}
});

module.exports = Link;
