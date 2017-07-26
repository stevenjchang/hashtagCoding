const Instagram = require('node-instagram').default
const ENV = require('../../../apikey.json')

// Create a new instance. 
const instagram = new Instagram({
  clientId: ENV.CLIENT_ID,
  clientSecret: ENV.CLIENT_SECRET ,
  accessToken: ENV.ACCESS_TOKEN,
});

const getInstagramUserImages = (req, res) => {
  instagram.get('users/self/media/recent', (err, data) => {
    if (err) {
      console.log('*** Error in instagram.get - app.get(callback) - server/index.js', err);
    } else {
      res.send(data);
      // fs.writeFile(path.join(__dirname, '../database/dummyData2.js'), JSON.stringify(data, null, 2), function(err, success) {
      //   if(err) {
      //     console.log('err inside fs writefile', err)
      //   } else {
      //     console.log('success')
      //   }
      // })
    }
  });
}

module.exports = { getInstagramUserImages: getInstagramUserImages}
