

var FactualAuth = Npm.require("factual-api")
var factual = null;

Factual = {
    configure : function (opt) {
	factual = new FactualAuth(opt.key,opt.secret);
    }, 
    get : function() {
	for (var i in arguments) 
	    if (typeof arguments[i] === "function")
		arguments[i] = Meteor.bindEnvironment(arguments[i])
	factual.get.apply(factual,arguments);
    },
    post : function() {
	for (var i in arguments) 
	    if (typeof arguments[i] === "function")
		arguments[i] = Meteor.bindEnvironment(arguments[i])
	factual.post.apply(factual,arguments);
    },
    startDebug : function() { factual.startDebug(); },
    stopDebug  : function() { factual.stopDebug();},
    setRequestTimeout : function(){ factual.setRequestTimeout(arguments[0]);},
    setBaseURI : function(){factual.setBaseURI(arguments[0]);},
    requestUrl : function() {
	for (var i in arguments) 
	    if (typeof arguments[i] === "function")
		arguments[i] = Meteor.bindEnvironment(arguments[i])
	factual.requestUrl.apply(factual,arguments);
    }
}
	
