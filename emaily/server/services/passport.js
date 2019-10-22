const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {

    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile id
          done(null, existingUser)
        } else {
          // we don's have a user record with this ID, make a new record
          new User({ googleId: profile.id }).save().then(user => done(null, uer));
        }
      })
  }
));