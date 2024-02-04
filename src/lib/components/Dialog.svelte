<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const showModal = (el: HTMLDialogElement) => {
        el.showModal();
    }
</script>

<dialog on:close={() => dispatch('close')} class="mx-auto" use:showModal>
    <form method="dialog" class="leading-zero">
        <button formmethod="dialog">
            <slot />
        </button></form>
</dialog>

<style lang="postcss">
    :global(html:has(:modal[open])) {
        overflow: hidden;
    }
    
    dialog:modal {
        box-shadow: 3px 3px 10px rgba(0 0 0 / 0.5);
        overscroll-behavior: contain;
    }

    dialog::backdrop {
        backdrop-filter: blur(10px);
        overscroll-behavior: contain;
    }
</style>