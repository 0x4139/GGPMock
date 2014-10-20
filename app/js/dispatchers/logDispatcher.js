var Dispatcher = require('./dispatcher');
var merge = require('react/lib/merge');


var LogDispatcher = merge(Dispatcher.prototype,{
	handleViewAction:function(action) {
		this.dispatch({
			source:'LOG_ACTION',
			action:action
		})
	}
});

module.exports = LogDispatcher;