<script>
    import PostCard from "$lib/components/PostCard.svelte";
    import Accordion from "$lib/components/Accordion.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";

    export let data;
    const featuredPosts = data.posts.slice(0, 9);
</script>

<section class="hero">
    <h1>Innovación y Análisis Estructural</h1>
    <p>Soluciones técnicas y artículos de divulgación científica.</p>
</section>

<section id="archive">
    <h2>Artículos Destacados</h2>
    <div class="grid-3x3">
        {#each featuredPosts as post}
            <a href={`/blog/${post.slug}`}>
                <PostCard {post} />
            </a>
        {/each}
    </div>
    <div class="center-btn">
        <a href="#all-posts" class="btn">Ver todos los artículos</a>
    </div>
</section>

<section id="about" class="about">
    <img src="https://via.placeholder.com/150x200" alt="Autor" />
    <div>
        <h2>Sobre el Autor</h2>
        <p>
            Ingeniero investigador especializado en métodos numéricos y
            optimización computacional. Enfoque orientado a la resolución
            algorítmica de problemas físicos complejos.
        </p>
    </div>
</section>

<section id="services">
    <h2>Servicios</h2>
    {#each [1, 2, 3] as service}
        <div class="service-row">
            <img
                src="https://via.placeholder.com/300x150"
                alt={`Servicio ${service}`}
            />
            <div class="service-info">
                <h3>Consultoría Especializada {service}</h3>
                <Accordion
                    question="¿Cuál es el alcance del servicio?"
                    answer="Definición precisa de requerimientos técnicos y modelos de simulación."
                />
                <Accordion
                    question="¿Tiempos de entrega?"
                    answer="Estándar de 2 a 4 semanas según la complejidad computacional."
                />
                <a href="#" class="btn-small">Solicitar Información (WA)</a>
            </div>
        </div>
    {/each}
</section>

<section id="all-posts">
    <h2>Archivo Completo</h2>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Categoría</th>
                    <th>Última Edición</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {#each data.posts as post}
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.category}</td>
                        <td>{post.lastEdited}</td>
                        <td
                            ><a href={`/blog/${post.slug}`} class="btn-small"
                                >Leer</a
                            ></td
                        >
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<section id="contact">
    <h2>Contacto</h2>
    <div style="max-width: 500px; margin: 0 auto;">
        <ContactForm />
    </div>
</section>

<style>
    section {
        margin-bottom: 3rem;
    }
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.5rem;
        border-bottom: 2px solid #888888;
        padding-bottom: 0.25rem;
        margin-bottom: 1rem;
    }

    /* Layouts */
    .grid-3x3 {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
        .grid-3x3 {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .about {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
        background: #ffffff;
        padding: 1rem;
        border: 1px solid #888888;
    }
    .about img {
        width: 150px;
        height: 200px;
        object-fit: cover;
    }

    .service-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
        background: #ffffff;
        padding: 1rem;
        border: 1px solid #888888;
    }
    @media (min-width: 768px) {
        .service-row {
            flex-direction: row;
        }
    }
    .service-row img {
        width: 300px;
        height: 150px;
        object-fit: cover;
        flex-shrink: 0;
    }
    .service-info {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .service-info h3 {
        margin-top: 0;
    }

    /* Tables */
    .table-container {
        overflow-x: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        background: #ffffff;
        border: 1px solid #888888;
    }
    th,
    td {
        text-align: left;
        padding: 0.5rem;
        border-bottom: 1px solid #888888;
    }
    th {
        background-color: #f5f5f5;
        font-weight: bold;
    }

    /* Buttons */
    .center-btn {
        text-align: center;
        margin-top: 1rem;
    }
    .btn {
        display: inline-block;
        padding: 0.5rem 1.5rem;
        background-color: #0055aa;
        color: #ffffff;
        font-weight: bold;
        border-radius: 3px;
    }
    .btn-small {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        background-color: #0055aa;
        color: #ffffff;
        font-size: 0.8rem;
        border-radius: 2px;
        align-self: flex-start;
        margin-top: 0.5rem;
    }
</style>
