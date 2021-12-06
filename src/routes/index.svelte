<script>
  import SvelteMarkdown from 'svelte-markdown'
  import data from '$lib/data/posts.json'

  const txt = data[0].content
  console.log(txt)
</script>

<h1>Homepage</h1>

<SvelteMarkdown source={txt} />
