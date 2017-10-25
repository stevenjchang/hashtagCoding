const cheerio = require('cheerio');

const scrapeCraigslist = (data) => {
  const $ = cheerio.load(data);
  const scrapedList = [];
  $('.result-row').each(function(index, element){
    scrapedList[index] = {};
    let resultImage = $(element).find('.result-image');
    scrapedList[index]['pid'] = $(this).attr('data-pid');
    scrapedList[index]['href'] = $(resultImage).attr('href')
    scrapedList[index]['images'] = $(resultImage).attr('data-ids');
    let price = $(element).find('.result-meta .result-price');
    scrapedList[index]['price'] = $(price).text();
    let dateTime = $(element).find('.result-date');
    scrapedList[index]['dateTime'] = $(dateTime).attr('datetime');
    let title = $(element).find('.result-title');
    scrapedList[index]['title'] = $(title).text()
    let neighborhood = $(element).find('.result-hood');
    let neighborhoodCleanText = $(neighborhood).text().substring(2, $(neighborhood).text().length - 1);
    scrapedList[index]['neighborhood'] = neighborhoodCleanText;
    scrapedList[index]['show'] = true;
  })
  return scrapedList;
}

module.exports.scrapeCraigslist = scrapeCraigslist;
