const Instagram = require('node-instagram').default;
const fs = require('../fs');
require('dotenv').config();

// Create a new instance.
const instagram = new Instagram({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
});

const getInstagramUserImages = (req, res) => {
  instagram.get('users/self/media/recent', (err, data) => {
    if (err) {
      console.log('Error! in instagram.get - getInstagramUserImages() - helpers/api/instagram =>', err);
    } else {
      fs.writeDummyData(data, 'dummyData3.js', false); // the 3rd param true false turns this function on (true) and off (false)
      res.send(data);
    }
  });
};

module.exports = { getInstagramUserImages };
