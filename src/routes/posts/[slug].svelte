<script context="module">
  import { base } from '$app/paths'

  export async function load({ page, fetch }) {
    const slug = page.params.slug
    const post = await fetch(`${base}/api/${slug}.json`).then(r => r.json())

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
