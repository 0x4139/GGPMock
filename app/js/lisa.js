/**
 * @jsx React.DOM
 */
var AmpersandRouter = require('ampersand-router');
var LogActions = require('./actions/logActions');
var LogStore = require('./stores/logStore');
window.React = require('react');
var LogComponent= require('./components/logComponent');
Router = AmpersandRouter.extend({
    routes: {
        '': 'home',
        'debit':'debit',
        'payout':'payout',
        'jp':'jp',
        'gameFinished':'gameFinished',
        'refund':'refund',
        'finishFreePlay':'finishFreePlay',
        'getAccountBalance':'getAccountBalance'
    },

    home: function () {
    },
    debit:function  () {
    },
    payout:function  () {
        
    },
    jp:function () {  

    },
    gameFinished:function  () {
        
    },
    refund:function  () {
        
    },
    finishFreePlay:function  () {
        
    },
    getAccountBalance:function  () {
        
    }

});

var router = new Router();
router.history.start({pushState:true});
$('#CID').val($.cookie('CID'));
///////////////

window.test= function  () {
    $.cookie('CID',$('#CID').val());
   // sweetAlert('Good Job!', 'Client ID was updated with success', 'success');
   LogActions.addLog('this is the log');
}

  var container = document.getElementById("editor");
        var editor = new JSONEditor(container);

        // set json
        var json = {
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": "b", "c": "d"},
            "String": "Hello World"
        };
        editor.set(json);
React.renderComponent(<LogComponent/>,document.getElementById('logWindow'));