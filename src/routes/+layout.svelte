<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    />
</svelte:head>

<Header />
<main>
    <slot />
</main>
<Footer />

<style>
    :global(body) {
        margin: 0;
        font-family: Georgia, Cambria, "Times New Roman", Times, serif;
        background-color: #f5f5f5;
        color: #111111;
        line-height: 1.4;
        font-size: 14px;
    }
    :global(a) {
        text-decoration: none;
        color: #0055aa;
    }
    :global(*) {
        box-sizing: border-box;
    }
    main {
        min-height: 80vh;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
