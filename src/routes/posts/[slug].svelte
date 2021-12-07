<script context="module">
  export async function load({ page, fetch }) {
    const resourceURL = `/api/posts-${page.params.slug}`
    const res = await fetch(resourceURL)
    const data = await res.json()

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
