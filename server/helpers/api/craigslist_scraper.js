// const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio');
// const $ = cheerio.load('<h2 class="title">Hello world</h2>')

// const $ = cheerio.load('<ul id="fruits">...</ul>');

const getCraigslistScrapper = () => {
  fs.readFile(path.join(__dirname, '../../../database/craigslist.html'), 'utf-8', function(err, data) {
    if (err) {
      console.log('*** Error! in craigslist_scraper.js');
    } else {
      const $ = cheerio.load('<h2 class="title">Hello world</h2>')
        // let $ = cheerio.load(data, { decodeEntities: true });
      // let $ = cheerio.load('<ul id="fruits">...</ul>');
      // $('.result-row').each(function(index, element){
      //   console.log('hey cheerio')
      // })
      

      console.log('*** getCraigslistScrapper inside readFile => abc: ')
    }
  })
}

module.exports.getCraigslistScrapper = getCraigslistScrapper;
