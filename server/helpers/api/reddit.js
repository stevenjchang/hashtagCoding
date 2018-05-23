const Snoowrap = require('snoowrap');
const fs = require('../fs');
const path = require('path');
require('dotenv').config();

const redditAllUpvotedPosts = require('../../../database/redditAllUpvotedPosts.js');

const getReddit = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const r = new Snoowrap({
    userAgent: req.headers['user-agent'],
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });

  res.send(redditAllUpvotedPosts);

  // r.getMe().getUpvotedContent().fetchAll()
  //   .then((response) => {
  //     fs.writeDummyData(response, 'redditAllUpvotedPosts.js', true);
  //   });
};

module.exports = { getReddit };
