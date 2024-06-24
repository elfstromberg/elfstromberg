<script lang="ts">
    import Dialog from "$lib/components/Dialog.svelte";

    interface Image {
        default: any;
    }

    const images: Record<string, Image> = import.meta.glob(
        "$lib/images/**/*.{jpg,jpeg,png}",
        {
            eager: true,
            query: {
                enhanced: true,
            },
        },
    );

    let modal: string | null = null;
</script>

<div id="work">
    <div
        class={`container px-4 gap-4 py-16 columns-1 sm:columns-2 md:columns-3 xl:columns-4 mx-auto`}
    >
        {#each Object.values(images) as img}
            {@const aspect =
                img.default.img.w > img.default.img.h
                    ? "aspect-video"
                    : "aspect-portrait"}

            <button on:click={() => (modal = img.default)}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <enhanced:img class={`mt-4 ${aspect}`} src={img.default} />
            </button>
        {/each}
    </div>
</div>

{#if modal}
    <Dialog on:close={() => (modal = null)}>
        <enhanced:img
            class="max-h-screen-90 max-w-screen-90 w-auto hero"
            src={modal}
            alt="Modal"
        />
    </Dialog>
{/if}
