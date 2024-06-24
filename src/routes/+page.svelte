<script lang="ts">
    import Hero from "$lib/components/components/Hero.svelte";
    import About from "$lib/components/components/About.svelte";
    import Work from "$lib/components/components/Work.svelte";
</script>

<div>
    <Hero />

    <main class="shadow-top">
        <div class="bg-gray-100">
            <About />
        </div>
        <div class="bg-white">
            <Work />
        </div>
    </main>
</div>
