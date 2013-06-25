
function sayHello(app) {
  console.log('!!!!!!! HELLO WORLD !!!!!!!!!');
  console.log('running on ' + (app.req ? 'server!' : 'client!') );
}


module.exports = {

  index: function(params, callback) {

  	// only the server side can write to the session
  	if(this.app.req && this.app.req.session) {
      this.app.req.session.homeload = Date.now();
  	}

    sayHello(this.app);

    callback(null, 'home/index');
  }


, stripe: function(params, callback) {

    // sayHello(this.app);

    callback();
  }


};

