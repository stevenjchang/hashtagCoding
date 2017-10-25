module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'blog_dev'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'blog'
    }
  }
  
}