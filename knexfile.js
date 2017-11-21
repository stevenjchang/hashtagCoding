// const db_connection = process.env.DATABASE_URL ? process.env.DATABASE_URL + '? ssl=true' : { database: 'blog_dev' }

module.exports = {

    client: 'postgresql',
    connection: process.env.DATABASE_URL

}
