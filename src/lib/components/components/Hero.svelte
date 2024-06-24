<script lang="ts">
    import hero from "$lib/hero.jpg?enhanced";
</script>

<enhanced:img
    alt="Hero"
    src={hero}
    class="object-cover object-center w-full h-screen -z-10 fixed"
/>

<header>
    <div class="h-screen">
        <div class="h-full bg-black bg-opacity-25 flex">
            <div class="w-full flex flex-col relative">
                <nav
                    class="w-full absolute top-0 bg-gradient-to-b from-[#00000050] from-50%"
                >
                    <div
                        class="container font-bold mx-auto text-xl text-white text-right flex p-10 gap-10 justify-center lg:justify-end"
                    >
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                    </div>
                </nav>

                <div class="grow text-center flex flex-col justify-center">
                    <h1 class="max-lg:mt-16 font-bold text-6xl text-white">
                        Henrietta Elfström Berg
                    </h1>
                </div>
            </div>
        </div>
    </div>
</header>

<style>
    /* .hero {
        width: var(--size);
		height: auto;
    } */
</style>
