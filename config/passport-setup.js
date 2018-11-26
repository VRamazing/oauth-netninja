const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
	new GoogleStrategy({
	//options for strategy
		clientID: '395613400955-i7humup06d6dp8fv7sj6bmsml9hq32rb.apps.googleusercontent.com',
        clientSecret: 'v3aNo6Wyss1H_lNCAivpdhdi'	
    }), ()=>{	});
