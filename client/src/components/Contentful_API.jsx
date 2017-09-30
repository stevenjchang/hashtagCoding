import {createClient} from 'contentful'
import ENV from '../../../apikey.json'

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: ENV.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ENV.CONTENTFUL_DELIVERY_API
})

