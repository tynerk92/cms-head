module.exports.handler = async (event, context) => {
  const { slug } = event.queryStringParameters
  const resourceURL = `./posts/${slug}.md`
  const md = require(resourceURL)

  return {
    statusCode: 200,
    body: md
  }
}
