const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio');

const getCraigslistScrapper = () => {
  fs.readFile(path.join(__dirname, '../../../database/craigslist.html'), 'utf-8', function(err, data) {
    if (err) {
      console.log('*** Error! in craigslist_scraper.js');
    } else {
        const $ = cheerio.load(data);
        const carList = [];
      $('.result-row').each(function(index, element){
        carList[index] = {};
        let resultImage = $(element).find('.result-image');
        carList[index]['pid'] = $(this).attr('data-pid');
        carList[index]['href'] = $(resultImage).attr('href')
        carList[index]['images'] = $(resultImage).attr('data-ids');
        let price = $(element).find('.result-meta .result-price');
        carList[index]['price'] = $(price).text();
        let dateTime = $(element).find('.result-date');
        carList[index]['dateTime'] = $(dateTime).attr('datetime');
        let title = $(element).find('.result-title');
        carList[index]['title'] = $(title).text()
        let neighborhood = $(element).find('.result-hood');
        carList[index]['neighborhood'] = $(neighborhood).text()
      })
      console.log('*** carList =>', carList)
      }
  })
}

module.exports.getCraigslistScrapper = getCraigslistScrapper;
