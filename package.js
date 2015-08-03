Package.describe({
    name: 'sorenriise:factual-api',
    version: '1.0.1',
    summary: "Meteor wrapper for factual-api",
    git: 'https://github.com/sorenriise/meteor-factual-api'
});


Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.addFiles('server.js'  , 'server');

    api.export(['Factual', 'Factual']);
})

Npm.depends({
	"factual-api": "1.0.7"
});


