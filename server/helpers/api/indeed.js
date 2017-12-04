// const axios = require('axios');
// const cheerio = require('cheerio');

// const indeed = require('indeed-scraper');

// const queryOptions = {
//   query: 'Frontend',
//   city: 'San Francisco, CA',
//   radius: '25',

// };

// const getIndeedJobs = (req, res) => {
//   indeed.query(queryOptions).then(result => {
//     // title
//     // summary
//     // url
//     // company
//     // location
//     // postDate
//     console.log(result.slice(0,10));
//     res.send(result.slice(0,10)); // An array of Job objects
//   });
// }

// const url = "https://www.indeed.com/jobs?q=Front+end+developer&l=San+Francisco%2C+CA";
// const getIndeedJobs2 = (req, res) => {
//   axios.get(url)
//     .then(result => {
//       const $ = cheerio.load(result.data);
//       // res.send(JSON.stringify(result.data, null, ''));
//       const jobList = [];
//       $('#resultsCol').children().each(function(index, element) {
//         // let row = $(element).find('.summary').text();
//         let row = $(element).find('.result').attr('id');
//         let title = $(element).children('a').attr('data-tn-element');
//         let job = $(element);
//         let jobtitle = job.find('.jobtitle').text();
//         let summary = job.find('.summary').text();

//       })
//     })
//     .catch(err => console.log('Error! in getIndeedJobs - api/indeed.js =>', err))
// }

// module.exports.getIndeedJobs = getIndeedJobs;
