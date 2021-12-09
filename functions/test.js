module.exports.handler = async (event, context) => {
  const { slug } = event.queryStringParameters
  console.log("Running function - slug: ", slug)
  const resourceURL = `./posts/${slug}.md`
  const md = require(resourceURL)
  console.log("Found MD: ", md)

  return {
    statusCode: 200,
    body: md
  }
}
