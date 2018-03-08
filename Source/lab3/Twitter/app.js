/**
 * Created by gattu on 3/6/2018.
 */
/**
 * Created by gattu on 3/6/2018.
 */
$(document).ready(function () {
   
    //var Twitter = require('twit');
    //var twitterAuth = require('twitter-oauth')({
    //    consumerKey: "PS8tSaiHnvm3oMucUG2Gux4ID", /* per appication - create a comsumer key here: https://dev.twitter.com/apps */
    //    domain: 'http://localhost',
    //    consumerSecret: "5yBgCTor61Er41MagNarvPhZw0hui4di1ZR0UBpMDOIIdyGUdH", /* create a comsumer key here: https://dev.twitter.com/apps */
    //    loginCallback: "http://localhost/twitter/sessions/callback",  /* internal */
    //    completeCallback: "http://localhost/home"  /* When oauth has finished - where should we take the user too */
    //});

//    var oauth = new OAuth.OAuth(
//    'https://api.twitter.com/oauth/request_token',
//    'https://api.twitter.com/oauth/access_token',
//    config.twitterConsumerKey,
//    config.twitterSecretKey,
//    '1.0A',
//    null,
//    'HMAC-SHA1'
//);

    var twit = require('twitter-oauth');
    var username = "sampaaath";
    var config = {
        "consumer_key": "PS8tSaiHnvm3oMucUG2Gux4ID",
        "consumer_secret": "5yBgCTor61Er41MagNarvPhZw0hui4di1ZR0UBpMDOIIdyGUdH",
        "access_token": "1974127951-ZSrmb1Ep50TjEzMu8MdQ7MPhzVWqwNUWqa0QOYa",
        "access_token_secret": "91fxY8dTiQSWPDoEZjM4mOkMZzhKGKYVJYNu55iyzjfX1"
    }
    //var twitter = new Twitter(config);
    var twt = new twit(config);
    twt.get('favorites/list', function (error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  // The favorites.
        console.log(response);  // Raw response object.
    });
});