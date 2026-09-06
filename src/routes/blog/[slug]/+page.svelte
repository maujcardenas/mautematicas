<script>
    export let data;
</script>

<article class="post">
    <header>
        <span class="meta"
            >{data.category} | Última edición: {data.lastEdited}</span
        >
        <h1>{data.title}</h1>
    </header>

    <div class="content">
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    .post {
        background-color: #ffffff;
        padding: 2rem;
        border: 1px solid #888888;
        border-radius: 4px;
    }
    header {
        border-bottom: 1px solid #888888;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
    }
    .meta {
        color: #888888;
        font-size: 0.85rem;
        text-transform: uppercase;
    }
    h1 {
        margin: 0.5rem 0 0 0;
    }

    /* Estilos internos para el Markdown */
    .content :global(h2) {
        color: #111111;
        margin-top: 2rem;
    }
    .content :global(p) {
        margin-bottom: 1rem;
    }
    .content :global(img) {
        max-width: 100%;
        border: 1px solid #888888;
    }
</style>
