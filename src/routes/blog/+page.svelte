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
    <h1>Educación y Aprendizaje</h1>

    <div class="filters card card-body filters-container">
        <input
            type="text"
            placeholder="Buscar palabras clave..."
            bind:value={searchQuery}
            class="input-field search-input"
        />
        <select bind:value={selectedCategory} class="input-field select-input">
            {#each categories as cat}
                <option value={cat}>{cat}</option>
            {/each}
        </select>
    </div>

    <div class="grid-3">
        {#each filteredPosts as post}
            <a href={`/blog/${post.slug}`} class="card card-link">
                <img src={post.image} alt={post.title} />
                <div class="card-body">
                    <span class="post-metadata">
                        {post.category} - {post.date}
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

    .post-metadata {
        font-size: 0.8rem;
        color: #0c325a;
    }

    .post-title {
        color: #000000;
        margin: 0.5rem 0;
    }

    .post-description {
        color: #2a2829;
        font-size: 0.9rem;
    }

    .grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
    }

    .card {
        background-color: #e0f2fe;
        border: 1px solid #2a2829;
        border-radius: 12px;
        overflow: hidden;
        display: block;
    }

    .card:hover {
        border-color: #f8fafc;
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
