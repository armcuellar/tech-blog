const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        userId: req.session.user_id,
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;