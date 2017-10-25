const Instagram = require('node-instagram').default
const fs = require('../fs')
// const ENV = require('../../../apikey.json')

// Create a new instance. 
const instagram = new Instagram({
  clientId: ENV.CLIENT_ID,
  clientSecret: ENV.CLIENT_SECRET,
  accessToken: ENV.ACCESS_TOKEN,
});

const getInstagramUserImages = (req, res) => {
  instagram.get('users/self/media/recent', (err, data) => {
    if (err) {
      console.log('*** Error in instagram.get - getInstagramUserImages() - helpers/api/instagram =>', err);
    } else {
      fs.writeDummyData(data, 'dummyData3.js', false)  // the 3rd param true false turns this function on (true) and off (false)
      res.send(data);
    }
  });
}

module.exports = { getInstagramUserImages: getInstagramUserImages}
