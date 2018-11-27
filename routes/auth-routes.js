const router = require('express').Router();
const passport = require('passport');


//auth login
router.get('/login', (req,res) => {
	res.render('login');
});

//auth login
router.get('/logout', (req,res) => {
	//handle with passport
	res.render('logout');
});

//auth with google
router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	res.send('You have reached callback URI')
});

module.exports = router;