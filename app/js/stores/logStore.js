var LogDispatcher = require ('../dispatchers/logDispatcher');
var merge = require('react/lib/merge');
var EventEmitter = require ('events').EventEmitter;

var _logs =[];

function _addLog (log) {
	_logs.push({
		data:log,
		time:new Date
	});
}

var logStore = merge(EventEmitter.prototype,{
	emitChange:function(){
		this.emit('NEW_LOG');
	},
	addNewLogListener:function(callback){
		this.on('NEW_LOG',callback);
	},
	getLogs : function(){
		return _logs;
	},
	dispatcherIndex:LogDispatcher.register(function(payload) {
		_addLog(payload.action.item);
		logStore.emitChange();
		return true;
	})
});

module.exports = logStore;