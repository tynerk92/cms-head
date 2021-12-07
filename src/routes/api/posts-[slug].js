export const get = async ({ params }) => {
  const resourceURL = `/_posts/blog/${params.slug}.md?raw`
  const data = await import(resourceURL)
  return {
    body: {
      ...data
    }
  }
}
