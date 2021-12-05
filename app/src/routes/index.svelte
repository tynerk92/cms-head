<script context="module">

</script>

<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    const cms = await import('netlify-cms')

    console.log(cms)
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
