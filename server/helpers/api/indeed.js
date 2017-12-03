const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://www.indeed.com/jobs?q=Front+end+developer&l=San+Francisco%2C+CA";

const getIndeedJobs = (req, res) => {
  axios.get(url)
    .then(result => {
      res.send('success getIndeedJobs');
    })
    .catch(err => console.log('Error! in getIndeedJobs - api/indeed.js =>', err))
}

module.exports.getIndeedJobs = getIndeedJobs;
