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

<div class="layout-container main-layout">
    <h1>Blog</h1>

    <div class="filters card card-body filters-container">
        <input
            type="text"
            placeholder="Buscar palabras clave..."
            bind:value={searchQuery}
            class="input-field search-input"
        />

        <div class="categories-container">
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
                    <span class="pill">
                        {post.category} | {post.date}
                    </span>
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
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .main-layout {
        padding-top: 2rem;
    }

    .filters-container {
        margin-bottom: 2rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .search-input {
        flex: 1;
        min-width: 200px;
    }

    .select-input {
        width: auto;
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

    .input-field {
        padding: 0.5rem;
        border: 1px solid #71717a;
        border-radius: 4px;
    }
</style>
