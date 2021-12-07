<script context="module">
  export async function load({ page, fetch }) {
    const resourceURL = `/api/posts-${page.params.slug}`
    console.log("Requesting resource: ", resourceURL)
    const res = await fetch(resourceURL)
    console.log("Response: ", res)
    const data = await res.json()
    console.log("Data: ", data)

    if (res.ok) {
      return {
        props: {
          article: data.default
        }
      }
    }
  }
</script>

<script>
  export let article
</script>

<pre>{article}</pre>
