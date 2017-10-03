const db = require('../../db')

const getLinksFromDb = (req, res) => {
  db('links')
    .select().timeout(2000)
    .then((result) => res.send(result))
}

module.exports.getLinksFromDb = getLinksFromDb;
