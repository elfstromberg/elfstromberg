<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Dialog from "$lib/components/Dialog.svelte";
    
    import hero from "$lib/hero.jpg";
    import portrait from "$lib/portrait.jpg";

    // @ts-ignore
    import { html } from '$lib/biography.md';

    interface Image {
        default: any
    };

    const images: Record<string, Image> = import.meta.glob('$lib/images/**/*.{jpg,jpeg,png}', {
        eager: true
    });

    let modal: string | null = null;
</script>

<header class="bg-cover bg-right-bottom bg-fixed" style={`background-image: url(${hero})`}>
    <Hero>
        <div class="container mx-auto flex flex-col">
            <nav class="font-bold text-xl text-white text-right flex p-10 gap-10 justify-center md:justify-end">
                <a href="#about">About</a>
                <a href="#work">Work</a>
            </nav>

            <div class="grow text-center">
                <h1 class="mt-16 lg:mt-52 font-bold text-6xl text-white">Henrietta Elfström Berg</h1>
            </div>
        </div>
    </Hero>
</header>

<main class="shadow-top">
    <div id="about" class="container px-4 pt-16 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <img src={portrait} class="grayscale brightness-75" alt="Portrait of Henrietta Elfström Berg"/>
        <article class="prose col-span-1 grid gap-4 grid-cols-1 md:grid-cols-2 md:col-span-2">
            {@html `<div class="prose">${html}</div>`}
    </div>

    <div id="work" class="container px-4 gap-4 py-16 columns-1 sm:columns-2 md:columns-3 mx-auto">
        {#each Object.entries(images) as [src, img]}
            <button on:click={() => modal = img.default}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="mt-4" src={img.default} />
            </button>
        {/each}
    </div>

    {#if modal}
    <Dialog on:close={() => modal = null}>
        <img class="max-h-screen-90" src={modal} alt="Modal"/>
    </Dialog>
    {/if}
</main>