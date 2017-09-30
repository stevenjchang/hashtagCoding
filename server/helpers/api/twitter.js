const Twitter = require('twitter')
const ENV = require('../../../apikey.json')
const fs = require('../fs')

var twitter = new Twitter({
  consumer_key: ENV.TWITTER_CONSUMER_KEY,
  consumer_secret: ENV.TWITTER_CONSUMER_SECRET,
  access_token_key: ENV.TWITTER_ACCESS_TOKEN,
  access_token_secret: ENV.TWITTER_ACCESS_SECRET
});

// const getTwitterFeed = (req, res) => {
//   var params = {q: '#iamanengineer OR #hackathon', count: 200, include_entities: true, lang: "en"};
//   twitter.get('search/tweets', params, function(error, tweets, response) {
//     if (error) {
//       console.log('***Error! in getTwitterFeed in server/helpers/twitter =>');
//     } else {
//       fs.writeDummyData(tweets, 'dummyData4.js', false)
//       res.send(tweets);
//     }
//   });
// }

const getTwitterFeed = (req, res) => {
  var params = {screen_name: 'TechCrunch', count: 200, include_entities: true, lang: "en"};
  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
      console.log('***Error! in getTwitterFeed in server/helpers/twitter =>');
    } else {
      fs.writeDummyData(tweets, 'dummyData4.js', false)
      res.send(tweets);
    }
  });
}

module.exports = getTwitterFeed
