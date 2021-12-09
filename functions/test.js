module.exports.handler = async (event, context) => {
  const { slug } = event.queryStringParameters
  console.log("Running function - slug: ", slug)
  const md = await import(`./_posts/${slug}.md?raw`)
  console.log("Found MD: ", md)

  return {
    statusCode: 200,
    body: md
  }
}
