const Snoowrap = require('snoowrap');
const fs = require('../fs');
const path = require('path');
require('dotenv').config();

const getReddit = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const r = new Snoowrap({
    userAgent: req.headers['user-agent'],
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });

  r.getMe().getUpvotedContent().fetchAll()
    .then((response) => {
      // const data = JSON.stringify(response);
      fs.writeDummyData(response, 'redditAllUpvotedPosts.js', true);
      // res.send(response.data)
    });

  // fs.readFile(path.join(__dirname, '../../../database/redditAllUpvotedPosts.js'), 'utf-8', (err, data) => {
  //   console.log('hey ==>');
  //   if (err) { console.log('*** Error! in reddit.js'); }
  //   // res.send(JSON.stringify(data));
  // });
};

module.exports = { getReddit };
