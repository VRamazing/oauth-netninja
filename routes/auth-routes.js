const router = require('express').Router();

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
router.get('/google', (req, res) => {
	//handle with passport
	res.send('Login with google');
})

module.exports = router;