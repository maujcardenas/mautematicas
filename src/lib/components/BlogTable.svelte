<script>
    let { articles = [] } = $props();
    function navigateToPost(slug) {
        window.location.href = `/blog/${slug}`;
    }
</script>

<section>
    <h2 class="section-title">Artículos recientes del Blog</h2>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
                {#each articles as post}
                    <tr
                        class="clickable-row"
                        onclick={() => navigateToPost(post.slug)}
                    >
                        <td class="font-medium">{post.title}</td>
                        <td><span class="pill">{post.category}</span></td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<style>
    .table-responsive {
        overflow-x: auto;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        /* margin-bottom: 3rem; */
    }
    .clickable-row {
        cursor: pointer;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #ffffff;
        /* color: #334155; */
    }

    th,
    td {
        border-bottom: 1px solid #e2e8f0;
        padding: 1rem;
        text-align: left;
    }

    th {
        background-color: #f8fafc;
    }
</style>
