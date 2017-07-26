const express = require('express')
const path = require('path')
var fs = require('fs')
// const router = require('./router/router.js')
const router = require('express').Router()
const IP = process.env.IP || 'localhost'
const PORT = process.env.PORT || '3000'
const app = express()  

// const Instagram = require('node-instagram').default
const ENV = require('../apikey.json')
const dummyData = require('../database/dummyData').dummyData

const Instagram = require('../server/helpers/api/instagram')
 
// Create a new instance. 
// const instagram = new Instagram({
//   clientId: ENV.CLIENT_ID,
//   clientSecret: ENV.CLIENT_SECRET ,
//   accessToken: ENV.ACCESS_TOKEN,
// });

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: ENV.TWITTER_CONSUMER_KEY,
  consumer_secret: ENV.TWITTER_CONSUMER_SECRET,
  access_token_key: ENV.TWITTER_ACCESS_TOKEN,
  access_token_secret: ENV.TWITTER_ACCESS_SECRET
});
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', Instagram.getInstagramUserImages)
// app.get('/images', () => console.log('exports:', Instagram.getInstagramUserImages))

app.get('/images2', (request, response) => {  

//----- instagram api -----
  // instagram.get('users/self/media/recent', (err, data) => {
  //   if (err) {
  //     console.log('*** Error in instagram.get - app.get(callback) - server/index.js', err);
  //   } else {
  //     // response.send(data);
  //     // fs.writeFile(path.join(__dirname, '../database/dummyData2.js'), JSON.stringify(data, null, 2), function(err, success) {
  //     //   if(err) {
  //     //     console.log('err inside fs writefile', err)
  //     //   } else {
  //     //     console.log('success')
  //     //   }
  //     // })
  //   }
  // });

//----- instagram api -----

//----- twitter api -----
  var params = {q: '#iamanengineer OR #hackathon', count: 200, include_entities: true, lang: "en"};
  client.get('search/tweets', params, function(error, tweets, response1) {
    if (error) {
      console.log('*** Error inside twitter api - client.get - server/index.js =>');
      // console.log('error => ', error, ' tweets => ', tweets, ' response =>', response)
    } else {
      // console.log('tweet =>', JSON.stringify(tweets, null, 2))
      fs.writeFile(path.join(__dirname, '../database/dummyData2.js'), JSON.stringify(tweets, null, 2), function(err, success) {
        if(err) {
          console.log('err inside fs writefile')
        } else {
          console.log('success')
        }
      })
      response.send(tweets);
    }
  });
  
  // response.send(dummyData);

})

app.listen(PORT, (err) => {  
  if (err) {
    return console.log('failure at app.listen in server/index =>', err)
  }
  console.log(`server is listening on ${PORT}`)
})

module.exports.app = app;
