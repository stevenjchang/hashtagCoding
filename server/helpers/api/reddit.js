const Snoowrap = require('snoowrap');
require('dotenv').config();

const getReddit = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const r = new Snoowrap({
    userAgent: req.headers['user-agent'],
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });

  r.getMe().getUpvotedContent().fetchAll().then(res1 => {
    console.log('res *************** ==>', res1);
    res.send(res1)
  })
};

module.exports = { getReddit };
