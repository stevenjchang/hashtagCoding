const express = require('express')
const path = require('path')
var fs = require('fs')
// const router = require('./router/router.js')
const router = require('express').Router()
const IP = process.env.IP || 'localhost'
const PORT = process.env.PORT || '3000'
const app = express()  

const Instagram = require('node-instagram').default
const ENV = require('../apikey.json')
const dummyData = require('../database/dummyData').dummyData
 
// Create a new instance. 
const instagram = new Instagram({
  clientId: ENV.CLIENT_ID,
  clientSecret: ENV.CLIENT_SECRET ,
  accessToken: ENV.ACCESS_TOKEN,
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/images', (request, response) => {  
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

  response.send(dummyData);

})

app.listen(PORT, (err) => {  
  if (err) {
    return console.log('failure at app.listen in server/index =>', err)
  }
  console.log(`server is listening on ${PORT}`)
})

module.exports.app = app;
