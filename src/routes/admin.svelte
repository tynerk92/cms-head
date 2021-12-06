<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    const cms = await import('netlify-cms')

    console.log("Data: ", cms.getWidgets())
  })
</script>
