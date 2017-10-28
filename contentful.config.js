import {createClient} from 'contentful'
// import ENV from './apikey.json'
// const ENV = process.env;
const ENV = process.env || require('./apikey.json')
const showENV = () => console.log('ENV ======>', ENV)
showENV();

// const client = createClient({
//   space: ENV.CONTENTFUL_SPACE_ID,
//   accessToken: ENV.CONTENTFUL_DELIVERY_API
// })

const client = createClient({
  space: "ejzxoe50zkjh",
  accessToken: "6e5f2b3f1dfcd2659137dfa8494034078574934fc7070bbfdc44ae7a73f029ec0c"
})

export default client
