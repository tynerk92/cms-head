<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    const CMS = await import('netlify-cms')
  })
</script>

<svelte:head>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>
