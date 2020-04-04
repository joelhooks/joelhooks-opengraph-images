const cloudinary = require('cloudinary').v2
const qs = require('querystring')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

exports.handler = async function(event, ctx) {
  const {queryStringParameters} = event
  try {
    // https://res.cloudinary.com/dg3gyk0gu/image/upload/v1586032616/og-images/pixel.png
    const imageUrl = cloudinary.url(`v1586034934/og_images/pixel_zeddhz.png`, {
      // resouce_type: "raw"
      sign_url: true,
      // secure: true,
      custom_pre_function: {
        function_type: 'remote',
        source: `https://competent-goodall-d71d0d.netlify.com/.netlify/functions/gen-opengraph-image?${qs.stringify(
          {title: 'butts', author: 'Joel Hooks', tags: '1, 2, 3'},
        )}`,
      },
    })
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
