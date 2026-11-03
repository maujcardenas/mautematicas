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

<section>
    <h2 class="section-title">Blog</h2>

    <div class="search-and-filter card">
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
                    class="pill {selectedCategory === cat ? 'active' : ''}"
                    onclick={() => (selectedCategory = cat)}
                >
                    {cat}
                </button>
            {/each}
        </div>
    </div>

    <div class="grid-2">
        {#each filteredPosts as post}
            <a href={`/blog/${post.slug}`} class="card card-link">
                <img src={post.image} alt={post.title} />
                <div class="card-body">
                    <div class="pill">
                        {post.category}
                    </div>
                    <div class="pill">
                        {post.date}
                    </div>
                    <h3 class="post-title">
                        {post.title}
                    </h3>
                    <p class="post-description">
                        {post.description}
                    </p>
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
    .search-and-filter {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .input-field {
        flex: 1;
        min-width: 200px;
        padding: 0.5rem;
        border: 1px solid #2a2829;
        border-radius: 4px;
    }
    .active {
        background-color: #000000;
        color: E0F2FE;
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

    .card-body {
        padding: 1.5rem;
    }
</style>
