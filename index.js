//Hapi is class 
var Hapi = require('hapi');

//Instantiate
var server = new Hapi.Server();

//configure server connections /  host
server.connection({
  host: '0.0.0.0',
  port: 3000,
  routes: {
    //cross origin resource sharing
    cors: {
      headers: ["Access-Control-Allow-Credentials"],
      credentials: true
    }
  }
});

//Require MongoDB 
var plugins = [];

//start server
server.register(plugins, function(err){
  // check error
  if (err) {
    throw err;
  }

  server.start(function(){
    console.log('info', 'server running at: ' + server.info.uri);
  })
});
