const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const getCraigslistScrapper = (req, res) => {
  fs.readFile(path.join(__dirname, '../../../database/craigslist.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log('*** Error! in craigslist_scraper.js');
    } else {
      const $ = cheerio.load(data);
      const carList = [];
      $('.result-row').each((index, element) => {
        carList[index] = {};
        const resultImage = $(element).find('.result-image');
        carList[index]['pid'] = $(this).attr('data-pid');
        carList[index]['href'] = $(resultImage).attr('href');
        carList[index]['images'] = $(resultImage).attr('data-ids');
        const price = $(element).find('.result-meta .result-price');
        carList[index]['price'] = $(price).text();
        const dateTime = $(element).find('.result-date');
        carList[index]['dateTime'] = $(dateTime).attr('datetime');
        const title = $(element).find('.result-title');
        carList[index]['title'] = $(title).text();
        const neighborhood = $(element).find('.result-hood');
        carList[index]['neighborhood'] = $(neighborhood).text();
      });
      res.send(carList);
    }
  });
};

module.exports.getCraigslistScrapper = getCraigslistScrapper;
