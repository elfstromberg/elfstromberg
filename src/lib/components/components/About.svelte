<script lang="ts">
    import portrait from "$lib/portrait.jpg?enhanced";

    // @ts-ignore
    import { html } from '$lib/biography.md';
</script>

<div id="about" class="container px-4 pt-16 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <enhanced:img src={portrait} class="grayscale brightness-75" alt="Portrait of Henrietta Elfström Berg"/>
    <article class="prose col-span-1 grid gap-4 grid-cols-1 md:grid-cols-2 md:col-span-2">
        {@html `<div class="prose">${html}</div>`}
    </article>
</div>