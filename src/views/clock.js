/** @jsx React.DOM **/

var React         = require('react');

var TimeStore      = require('../stores/time');
var HistoryStore   = require('../stores/history');
var TimeActions    = require('../actions/time');
var HistoryActions = require('../actions/history')
var StorageBus     = require('../buses/storage');

function getState() {
	return {
		time: TimeStore.get(),
		history: HistoryStore.get()
	};
}

var Clock = React.createClass({
	getDefaultProps: function() {
		return {
			polling: 1000 / 16
		};
	},

	getInitialState: function() {
		return getState();
	},

	componentDidMount: function() {
		StorageBus.recv(this._onMessage);

		setInterval(this.poll, this.props.polling);
	},

	componentDidUnmount: function() {
		StorageBus.ignore(this._onMessage);
	},

	poll: function() {
		TimeActions.update({ time: Date.now() });
	},

	getTimeFormat: function() {
		var type = this.state.history.search.format;
        var time  = this.state.time.time;

		switch (type) {
            case 'seconds':
                return time / 1000;
            case 'minutes':
                return time / (1000 * 60);
            case 'hours':
                return time / (1000 * 60 * 60);
        }

        return time;
	},

	render: function() {
		var format = this.state.history.search.format;

		return (
			<div>
				<p>Currently filtering by:</p>

				<button className={format === 'hours' ? 'active' : null}
						onClick={this._onHoursClick}>Hours</button>

				<button className={format === 'minutes' ? 'active' : null}
						onClick={this._onMinutesClick}>Minutes</button>

				<button className={format === 'seconds' ? 'active' : null}
						onClick={this._onSecondsClick}>Seconds</button>

				<button className={!format ? 'active' : null}
						onClick={this._onMillisecondsClick}>Milliseconds</button>

				<p className="time">{ this.getTimeFormat() | 0 }</p>
			</div>
		);
	},

	_onMessage: function(event, data) {
		this.setState(getState());
	},

	_onHoursClick: function() {
		HistoryActions.filter({ format: 'hours' });
	},

	_onMinutesClick: function() {
		HistoryActions.filter({ format: 'minutes' });
	},

	_onSecondsClick: function() {
		HistoryActions.filter({ format: 'seconds' });
	},

	_onMillisecondsClick: function() {
		HistoryActions.clearFilter();
	}
});

module.exports = Clock;
