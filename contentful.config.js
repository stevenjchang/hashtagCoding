import {createClient} from 'contentful'
import ENV from './apikey.json'

const client = createClient({
  space: ENV.CONTENTFUL_SPACE_ID,
  accessToken: ENV.CONTENTFUL_DELIVERY_API
})

export default client
