Factual-api Meteor Wrapper
===

Creates a a Meteor like interface using the factual-api nodejs driver.

All callback functions are mapped to fiber freindly functions so you don't have to.

### Install

    $ meteor add sorenriise:factual-api


###  Configuration

    if (Meteor.isServer) {
        Factual.configure({
            key: "your-key",
            secret: "your-secret"
        });
    }


### Calling

    Factual.get('/t/places-us',{q:"century city mall", "include_count":"true"}, 
         function (error, res) {
            console.log("show "+ res.included_rows +"/"+ res.total_row_count +" rows:", res.data);
         });


Or as a Method   

    Meteor.methods({
        "factualget": function() {
            Factual.get('/t/places-us',{q:"century city mall", "include_count":"true"}, 
                  function (error, res) {
                       console.log("show "+ res.included_rows +"/"+ res.total_row_count +" rows:", res.data);
                  });
    });


### More Examples...

See https://github.com/Factual/factual-nodejs-driver for full capability of the API

Note: the factual object is only avaialble server side     

