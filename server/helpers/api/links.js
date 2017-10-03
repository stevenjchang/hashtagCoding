const db = require('../../db')

const getLinksFromDb = (req, res) => {
  db('links')
    .select().timeout(2000)
    .then((result) => res.send(result))
}

const postLinksToDb = (req, res) => {
  let info = req.body;

  db('links')
    .insert({
      name: info.name, 
      title: info.title,
      url: info.url,
      type: info.type,
      image: info.image
    })
    .then((result) => { res.send(result) })
    .catch((error) => { console.log('*** error! in postLinksToDb') })
}

module.exports.getLinksFromDb = getLinksFromDb;
module.exports.postLinksToDb = postLinksToDb;
