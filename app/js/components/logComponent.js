/**
 * @jsx React.DOM
 */

var React = require('react');
var LogStore = require('../stores/logStore');

function getLogs () {
	return {logs:LogStore.getLogs()}
}

var LogList = React.createClass({
	getInitialState:function(){
		console.log('initial logs',getLogs());
		return getLogs();
	},
	render: function() {
		var logs = this.state.logs.map(function (log) {
			console.log(log.time);
			return(
			<div className="alert alert-success" role="alert">
				<small className="pull-right">{log.time.toGMTString()}</small>
				<br/>
				<p>{log.data}</p>

			</div>);
		})
		return (
			<div id='logList'>{logs}</div>
		);
	},
	componentWillMount: function() {
		LogStore.addNewLogListener(this._onNewLog);
	},
	_onNewLog:function  () {
		console.log(LogStore.getLogs());
		this.setState(getLogs());
	}

});

module.exports = LogList;