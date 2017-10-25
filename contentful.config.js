import {createClient} from 'contentful'
// import ENV from './apikey.json'
const ENV = process.env;

const client = createClient({
  space: ENV.CONTENTFUL_SPACE_ID,
  accessToken: ENV.CONTENTFUL_DELIVERY_API
})

export default client
