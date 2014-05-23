/** @jsx React.DOM **/
var React   = require('react');
var History = require('../stores/history');
var Error404 = require('./errors/404.jsx');
var Navigation = require('./navigation.jsx');

var getState = function() {
	return History.get();
};

var Layout = React.createClass({

	getDefaultProps: function() {
		return getState();
	},

	componentDidMount: function() {
		History.onChange(this._onHistoryChange);
	},

	render: function() {
		var handler = this.props.handler || Error404;

		return (
            <main>
                <Navigation />
				{handler(this.props.params)}
			</main>
        );
	},

	_onHistoryChange: function() {
		this.setProps(getState());
	}
});

module.exports = Layout;
