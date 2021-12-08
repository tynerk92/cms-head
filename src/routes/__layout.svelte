<script>

</script>

<h1>Layout</h1>
<slot></slot>

<div class="sr-only">
  <a rel="prefetch" href="api/testing.json">Testing</a>
</div>

<style>
  .sr-only {
    position: absolute;
    top: -1000px;
    left: -1000px;
    visibility: hidden;
  }
</style>
