module.exports = {
  index: function(params, callback) {

  	// only the server side can write to the session
  	if(this.app.req && this.app.req.session) {
  		this.app.req.session.homeload = Date.now();

      console.log('hello server!');
  	}
    else {

      console.log('hello client!');
    }

  	console.log('!!!!!!! HELLO WORLD !!!!!!!!!');


    callback(null, 'home/index');

  }
};
