<script>
    let { blogCategories = [] } = $props();
</script>

<section>
    <h2 class="section-title">Materias</h2>
    <div class="grid-2">
        {#each blogCategories as category (category.title)}
            <div class="card">
                <img src={category.image} alt={category.alt} />
                <div class="card-body">
                    <h3 class="card-title">{category.title}</h3>
                    <p>{category.description}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .card {
        background-color: #f8fafc;
        border: 1px solid #2a2829;
        border-radius: 12px;
        overflow: hidden;
    }

    .card-body {
        padding: 1.5rem;
    }

    .card-title {
        color: #000000;
    }
</style>
