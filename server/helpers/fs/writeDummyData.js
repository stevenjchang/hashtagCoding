const fs = require('fs');
const path = require('path');

const writeDummyData = (data, filename, boolean) => {
  const prefix = 'module.exports = \n';
  if (boolean) { // set boolean to true to turn function on
    fs.writeFile(
      path.join(__dirname, '../../../database/', filename),
      // prefix + JSON.stringify(data, null, 2),
      data,
      (err, success) => {
        if (err) {
          console.log('Error! in writeDummyData - helpers/fs/writeFile', err);
        } else {
          console.log('Success! in writeDummyData, data written in: ', filename);
        }
      },
    );
  }
};

module.exports = writeDummyData;
