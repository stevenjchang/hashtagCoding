const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../../db');
const scraper = require('../scraper/');

const url = "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=front+end&sc.keyword=front+end&locT=C&locId=1147401&jobType=";

const getGlassdoorJobs = (req, res) => {
  axios.get(url)
    .then(result => {
      res.send('success')
    })
    .catch((err) => console.log('Error! in getGlassdoorJobs - api/glassdoor.js =>', err))
}

module.exports.getGlassdoorJobs = getGlassdoorJobs;
