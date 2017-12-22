const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../../db');
// const scraper = require('../scraper/');

const url = 'https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=front+end&sc.keyword=front+end&locT=C&locId=1147401&jobType=';
const urlPrefix = 'https://www.glassdoor.com/';

const getGlassdoorJobs = (req, res) => {
  axios.get(url)
    .then((result) => {
      const $ = cheerio.load(result.data);
      const jobList = [];
      $('.jlGrid').children().each((index, element) => {
        const jobLink = $(element).find('.jobLink');
        const info = $(element).find('.infoSalEst');
        jobList[index] = {};
        jobList[index]['href'] = urlPrefix + $(jobLink).attr('href');
        jobList[index]['company'] = $(info).attr('data-employer-shortname');
        jobList[index]['title'] = $(info).attr('data-jobtitle');
        jobList[index]['pid'] = $(info).attr('data-job-id');
        jobList[index]['location'] = $(element).find('.empLoc').find('.loc').text();
        jobList[index]['site'] = 'glassdoor';
        jobList[index]['show'] = true;
      });
      return jobList;
    })
    .then((sortedData) => {
      sortedData.map((item, i) => {
        let { pid = '', title = '', company = '', href = '', location = '', site = 'glassdoor', show = '' } = item;
        db.raw(
          'INSERT INTO job_listing (pid, title, company, href, location, site, show) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT DO NOTHING',
          [pid, title, company, href, location, site, show],
        )
          .catch(err => console.log('Error! in db.raw in glassdoor.js =>', err));
      })
      return [];
    })
    .then((placeholderValue) => {
      db('job_listing').orderBy('dateTime', 'desc')
        .then(jobList => res.send(jobList))
        .catch(err => console.log('Error! in db job_listing - glassdoor.js =>', err));
    })
    .catch(err => console.log('Error! in getGlassdoorJobs - api/glassdoor.js =>', err));
};

module.exports.getGlassdoorJobs = getGlassdoorJobs;
