<script>
    import "../app.css";
</script>

<svelte:head>
    <title>Henrietta Elfström Berg</title>
</svelte:head>

<slot />

<footer class="px-4 py-5">
  <p class="container mx-auto px-4 font-thin">
  &copy; Henrietta Elfström Berg 2024
  </p>
</footer>

<style lang="postcss">
  footer {
    background-color: theme(colors.gray.100);
  }
</style>