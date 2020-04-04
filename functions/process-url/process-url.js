const cloudinary = require('cloudinary').v2
const qs = require('querystring')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

exports.handler = async function(event, ctx) {
  const {queryStringParameters} = event
  const query = qs.stringify(queryStringParameters).replace('=', '%3D')
  const sourceUrl = `https://competent-goodall-d71d0d.netlify.com/.netlify/functions/gen-opengraph-image?${query}`
  console.log('source url:', sourceUrl)
  console.log('query: ', query)
  try {
    // https://res.cloudinary.com/dg3gyk0gu/image/upload/v1586032616/og-images/pixel.png
    const imageUrl = cloudinary.url(`v1586034934/og_images/pixel_zeddhz.png`, {
      // resouce_type: "raw"
      sign_url: true,
      // secure: true,
      custom_pre_function: {
        function_type: 'remote',
        source: sourceUrl,
      },
    })
    console.log('image url:', imageUrl)
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
