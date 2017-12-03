const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../../db');
const scraper = require('../scraper/');

const url = "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=front+end&sc.keyword=front+end&locT=C&locId=1147401&jobType=";
const urlPrefix = "https://www.glassdoor.com/";

const getGlassdoorJobs = (req, res) => {
  axios.get(url)
    .then(result => {
      const $ = cheerio.load(result.data);
      const jobList = [];
      $('.jlGrid').children().each(function(index,element) {
        let jobLink = $(element).find('.jobLink');
        let info = $(element).find('.infoSalEst');
        jobList[index] = {};
        jobList[index]['href'] = urlPrefix + $(jobLink).attr('href');
        jobList[index]['employer'] = $(info).attr('data-employer-shortname');
        jobList[index]['jobtitle'] = $(info).attr('data-jobtitle');
        jobList[index]['pid'] = $(info).attr('data-job-id');
        jobList[index]['location'] = $(element).find('.empLoc').find('.loc').text();
      })
      return jobList;
    })
    .then(sortedData => {
      res.send(sortedData);
    })
    .catch(err => console.log('Error! in getGlassdoorJobs - api/glassdoor.js =>', err))
}

module.exports.getGlassdoorJobs = getGlassdoorJobs;
