import {createClient} from 'contentful'
require('dotenv').config()

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API
})

export default client
