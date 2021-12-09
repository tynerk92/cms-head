<script context="module">

  export async function load({ page, fetch }) {
    const slug = page.params.slug
    console.log("Running load in ", slug, " load function")
    // const post = await fetch(`${base}/api/${slug}.json`).then(r => r.json())
    const post = await fetch(`/.netlify/functions/test?slug=${slug}`)

    console.log("Found post: ", post)

    return {
      props: {
        post: post
      }
    }
  }
</script>

<script>
  import SvelteMarkdown from 'svelte-markdown'
  export let post

  $: console.log(post)
</script>

<SvelteMarkdown source={post} />
