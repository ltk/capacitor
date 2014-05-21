/** @jsx React.DOM **/

var React       = require('react');

var TimeStore   = require('../stores/time');
var TimeActions = require('../actions/time')
var StorageBus  = require('../buses/storage');

var Clock = React.createClass({
	getDefaultProps: function() {
		return {
			polling: 1000 / 16
		};
	},

	getInitialState: function() {
		return TimeStore.get();
	},

	componentDidMount: function() {
		StorageBus.recv(this._onChange);

		setInterval(this.poll, this.props.polling);
	},

	componentDidUnmount: function() {
		StorageBus.ignore(this._onChange);
	},

	poll: function() {
		TimeActions.update({ time: Date.now() });
	},

	render: function() {
		return <p>{ this.state.time }</p>
	},

	_onChange: function() {
		this.setState(TimeStore.get());
	}
});

module.exports = Clock;
