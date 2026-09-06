<script>
    export let post;
</script>

<article>
    <img
        src={post.image || "https://via.placeholder.com/400x200"}
        alt={post.title}
    />
    <div class="content">
        <span class="category">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
    </div>
</article>

<style>
    article {
        background-color: #ffffff;
        border: 1px solid #888888;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 100%;
        height: 140px;
        object-fit: cover;
    }
    .content {
        padding: 0.75rem;
    }
    .category {
        font-size: 0.75rem;
        color: #888888;
        text-transform: uppercase;
    }
    h3 {
        margin: 0.25rem 0;
        font-size: 1rem;
        color: #111111;
    }
    p {
        margin: 0;
        font-size: 0.85rem;
        color: #111111;
    }
</style>
