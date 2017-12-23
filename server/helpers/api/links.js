const db = require('../../db');

const getLinksFromDb = (req, res) => {
  db('links')
    .select().timeout(2000)
    .then(result => res.send(result));
};

const postLinksToDb = (req, res) => {
  const info = req.body;

  db('links')
    .insert({
      name: info.name,
      title: info.title,
      url: info.url,
      type: info.type,
      image: info.image,
    })
    .then(result => res.send(result))
    .catch(err => console.log('Error! in postLinksToDb', err));
};

module.exports.getLinksFromDb = getLinksFromDb;
module.exports.postLinksToDb = postLinksToDb;
