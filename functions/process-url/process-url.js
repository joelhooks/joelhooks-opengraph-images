const cloudinary = require('cloudinary').v2
const qs = require('querystring')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

exports.handler = async function(event, ctx) {
  const {queryStringParameters} = event
  const sourceUrl = `https://competent-goodall-d71d0d.netlify.com/.netlify/functions/gen-opengraph-image?${qs.stringify(
    queryStringParameters,
  )}`
  console.log('source url:', sourceUrl)
  try {
    // https://res.cloudinary.com/dg3gyk0gu/image/upload/v1586028554/jh-og-image/1px.png
    const imageUrl = cloudinary.imageTag(
      `${process.env.JOEL_IMAGE_VERSION}/jh-og-image/1px.png`,
      {
        // resouce_type: "raw"
        sign_url: true,
        // secure: true,
        custom_pre_function: {
          function_type: 'remote',
          source: sourceUrl,
        },
      },
    )
    copnsole.log('image url:', imageUrl)
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl,
      },
      body: '',
    }
  } catch (e) {
    console.log(e)
  }
}
