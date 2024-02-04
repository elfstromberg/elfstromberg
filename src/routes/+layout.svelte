<script>
    import "../app.css";
</script>

<svelte:head>
    <title>Henrietta Elfström Berg</title>
</svelte:head>

<slot />

<footer class="container mx-auto px-4 py-5 font-thin">&copy; Henrietta Elfström Berg 2024</footer>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>