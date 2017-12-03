const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../../db');
const scraper = require('../scraper/');

const url = "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=front+end&sc.keyword=front+end&locT=C&locId=1147401&jobType=";

const getGlassdoorJobs = (req, res) => {
  axios.get(url)
    .then(result => {
      const $ = cheerio.load(result.data);
      const jobList = [];

      $('.jlGrid').children().each(function(index,element) {
        let jobLink = $(element).find('.jobLink');
        let href = $(jobLink).attr('href');
        let info = $(element).find('.infoSalEst');
        let employer = $(info).attr('data-employer-shortname');
        let jobtitle = $(info).attr('data-jobtitle');
        let id = $(info).attr('data-job-id');
        let location = $(element).find('.empLoc').find('.loc').text();
      })

    })
    .catch((err) => console.log('Error! in getGlassdoorJobs - api/glassdoor.js =>', err))
}

module.exports.getGlassdoorJobs = getGlassdoorJobs;
