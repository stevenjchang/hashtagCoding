const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../../db');
const scraper = require('../scraper/');

const { scrapeCraigslist } = scraper.craigslist;

const urlAddress = 'https://sfbay.craigslist.org/search/cto?hasPic=1&min_price=2500&max_price=6000&min_auto_year=2005&auto_title_status=1';

const urlAddressJobs = (jobType, jobCategory = 'cpg', jobCity) => {
  if (jobCity) {
    return (`https://sfbay.craigslist.org/search/, ${jobCity}, /, ${jobCategory}`);
  }
  return (`https://sfbay.craigslist.org/search/, ${jobCategory}`);
};

const getCraigslistFeed = (req, res) => {
  axios.get(urlAddress)
    .then((result) => {
      const $ = cheerio.load(result.data);
      const carList = [];
      $('.result-row').each((index, element) => {
        carList[index] = {};
        let resultImage = $(element).find('.result-image');
        carList[index]['pid'] = $(element).attr('data-pid');
        carList[index]['href'] = $(resultImage).attr('href');
        carList[index]['images'] = $(resultImage).attr('data-ids');
        let price = $(element).find('.result-meta .result-price');
        carList[index]['price'] = $(price).text();
        let dateTime = $(element).find('.result-date');
        carList[index]['dateTime'] = $(dateTime).attr('datetime');
        let title = $(element).find('.result-title');
        carList[index]['title'] = $(title).text();
        let neighborhood = $(element).find('.result-hood');
        let neighborhoodCleanText = $(neighborhood).text().substring(2, $(neighborhood).text().length - 1);
        carList[index]['neighborhood'] = neighborhoodCleanText;
        carList[index]['show'] = true;
      });
      return carList;
    })
    .then((sortedData) => {
      sortedData.map((item, i) => {
        let { pid, title, href, images, price, neighborhood, dateTime, show } = item;
        images = images || '';
        neighborhood = neighborhood || '';
        db.raw(
          'INSERT INTO car_listing (pid, title, href, images, price, neighborhood, "dateTime", show) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT DO NOTHING',
          [pid, title, href, images, price, neighborhood, dateTime, show],
        ).catch(err => console.log('Error! in db.raw - craigslist.js =>', err));
      })
      return [];
    })
    .then((placeholderValue) => {
      db('car_listing').orderBy('dateTime', 'desc')
        .then(carList => res.send(carList))
        .catch(err => console.log('Error! in db car_listing - craigslist.js =>', err));
    })
    .catch(err => console.log('Error! in axios / get urlAddress - craigslist.js =>', err));
};

const toggleCraigslistShowHide = (req, res) => {
  db('car_listing').where('id', '=', req.params.id).update({ show: !req.body.showStatus })
    .then((result) => {
      db('car_listing').where('id', '=', req.params.id).select()
        .then(postSuccess => console.log('Posting Successful in toggleCraigslistShowHide =>', postSuccess));
      res.send('success')
    })
    .catch(err => console.log('Error! in toggleCraigslistShowHide =>', err));
};

const getCraigslistJobs = (req, res) => {
  const { jobType, jobCategory, jobCity } = req.body;
  axios.get(urlAddressJobs())
    .then((result) => {
      return scrapeCraigslist(result.data);
    })
    .then((sortedData) => {
      sortedData.map((item, i) => {
        let { pid, title, href, images, price, neighborhood, site, favorite, note, show, dateTime } = item;
        images = images || '';
        neighborhood = neighborhood || '';
        db.raw(
          'INSERT INTO job_listing (pid, title, href, images, neighborhood, show, "dateTime") VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT DO NOTHING',
          [pid, title, href, images, neighborhood, show, dateTime],
        )
          .then(result => result)
          .catch(err => console.log('Error! in db raw getCraigslistJobs =>', err));
      });
      return [];
    })
    .then((placeholderValue) => {
      db('job_listing').orderBy('dateTime', 'desc')
        .then(jobList => res.send(jobList))
        .catch(err => console.log('Error! in db job_listing - craigslist.js =>', err));
    })
    .catch(err => console.log('Error! in axios / get urlAddresJobs - craigslist.js =>', err));
};

const getCraigslistJobs2 = (req, res) => {
  db('job_listing').orderBy('dateTime', 'desc')
    .then(jobList => res.send(jobList))
    .catch(err => console.log('Error! in db job_listing - craigslist.js =>', err));
};

module.exports.getCraigslistFeed = getCraigslistFeed;
module.exports.getCraigslistJobs = getCraigslistJobs;
module.exports.toggleCraigslistShowHide = toggleCraigslistShowHide;
