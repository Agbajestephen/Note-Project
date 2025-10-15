const express = require('express');
const passport = require('passport');
const router = express.Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use( new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
function (accessToken, refreshToken, profile, cb) {
      
  console.log(profile);

}
));

//Google Login Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login-failure',
    successRedirect: '/dashboard',
  })
);
//  Route if something goes wrong
router.get('/login-failure', (req, res) => {
  res.send('something went wrong...');
});

module.exports = router;
