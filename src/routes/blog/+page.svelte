<script>
    let { data } = $props();

    let searchQuery = $state("");
    let selectedCategory = $state("Todas");

    // Extract unique categories reactively
    let categories = $derived([
        "Todas",
        ...new Set(data.posts.map((post) => post.category)),
    ]);

    // Filter posts reactively
    let filteredPosts = $derived(
        data.posts.filter((post) => {
            const matchQuery =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            const matchCategory =
                selectedCategory === "Todas" ||
                post.category === selectedCategory;
            return matchQuery && matchCategory;
        }),
    );
</script>

<div class="layout-container">
    <section>
        <h2 class="section-title">Blog</h2>

        <h3>Búsqueda por texto:</h3>
        <input
            type="text"
            placeholder="Buscar palabras clave..."
            bind:value={searchQuery}
            class="input-field"
        />

        <div class="categories-selector">
            <h3>Filtra por Categoría:</h3>
            {#each categories as cat}
                <button
                    type="button"
                    class={selectedCategory === cat ? "pill" : "text-accent"}
                    onclick={() => (selectedCategory = cat)}
                >
                    {cat}
                </button>
            {/each}
        </div>

        <div class="grid-2">
            {#each filteredPosts as post}
                <a href={`/blog/${post.slug}`} class="card-link">
                    <img src={post.image} alt={post.title} />
                    <div class="card card-start">
                        <h3 class="post-title">
                            {post.title}
                        </h3>
                        <div class="pill">
                            {post.category}
                        </div>
                        <div class="text-accent">
                            {post.date}
                        </div>
                        <p class="post-description">
                            {post.description}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    </section>
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .input-field {
        flex: 1;
        min-width: 200px;
        padding: 0.5rem;
        border: 1px solid #2a2829;
        border-radius: 4px;
    }
    .pill {
        margin: 0.25rem 0rem 0.25rem 0.25rem;
    }

    .card-link {
        text-decoration: none;
    }

    .post-title {
        color: #000000;
        margin: 0.5rem 0;
    }

    .post-description {
        color: #2a2829;
        font-size: 0.9rem;
    }
</style>
