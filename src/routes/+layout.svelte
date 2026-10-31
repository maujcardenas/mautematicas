<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let { children } = $props();
</script>

<Header />
<main>
    {@render children()}
</main>
<Footer />

<style>
    :global(main) {
        padding-top: 120px; /*por el header fijo */
        min-height: calc(100vh - 200px);
    }
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Akt", sans-serif, system-ui;
        background-color: #ffffff;
        color: #2a2829;
    }
    :global(section) {
        margin: 4rem 0;
    }
    :global(h1, h2, h3, h4) {
        color: #2a2829;
        margin-bottom: 0.5rem;
    }
    :global(p, span, li) {
        color: #2a2829;
    }
    :global(a) {
        color: #0c325a;
        text-decoration: none;
    }
    :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }
    :global(.btn) {
        display: inline-block;
        background-color: #0c325a;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
    }
    :global(.btn:hover) {
        opacity: 0.8;
    }
    :global(.section-title){
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #000000;
    }
    :global(.card) {
        background-color: #f8fafc;
        border-radius: 12px;
        overflow: hidden;
    }
    :global(.grid-2){
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
</style>
