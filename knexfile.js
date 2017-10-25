module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '? ssl=true',
    // connection: {
    //   database: 'blog_dev'
    // }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '? ssl=true',
    // connection: {
    //   database: 'blog'
    // }
  }
  
}