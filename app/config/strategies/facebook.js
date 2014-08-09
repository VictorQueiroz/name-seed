var passport = require('passport'),
FacebookStrategy = require('passport-facebook').Strategy,
User = require('../../models').User,

FACEBOOK_APP_ID = '1496855677198940',
FACEBOOK_APP_SECRET = '24cc0d4cb8f9a79eb474cc47839da72e',

generatePassword = require('password-generator');

module.exports = function () {
  passport.use(new FacebookStrategy({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      enableProof: true
    },
    function(accessToken, refreshToken, profile, done) {
      User
        .find({ fb_id: profile.id })
        .success(function(user) {
          if(user) {
            // User with this fb_id exist, authenticating.
            return done(null, user);
          } else {
          /**
           * User with this fb_id does not exist, checking if there
           * is a user with this email address.
           */
            User
            .find({ email: profile.email })
            .success(function(user) {
              if(!user) {
                /**
                 * User with this email address does not exist
                 * either, creating a new one.
                 */
                User
                  .create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: generatePassword(12, false),
                    username: profile.displayName.toString().toLowerCase().replace(/ /g, ''),
                    fb_id: profile.id
                  })

                  .success(function(user) { // Authenticating the new user.
                    done(null, user);
                  });
              } else {
                // /**
                //  * User with this email exists, setting his fb_id
                //  * with the same as his facebook account for good!
                //  */
                // User
                //   .update({
                //     fb_id: profile.id
                //   }, {
                //     id: user.id
                //   })

                //   .success(function(user) {
                //     done(null, user);
                //   });

                done(null, user);
              }
            });
          }
        });
    }
  ));
};