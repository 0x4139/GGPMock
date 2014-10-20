var LogDispatcher=require('../dispatchers/logDispatcher');

var LogActions={
	addLog:function(item){
		LogDispatcher.handleViewAction({
			actionType:'ADD_LOG',
			item:item
		});
	}
}
module.exports = LogActions;