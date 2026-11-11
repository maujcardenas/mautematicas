<script>
    //Hero Component
</script>

<section>
    <div class="hero-grid">
        <div class="hero-content">
            <span class="hero-badge">
                Próximos Cursos Presenciales:
                <span class="pill"> 5 Enero, 2027 </span>
                <span class="pill"> Quito, Ecuador </span>
            </span>
            <h1>Mautematicas</h1>
            <p>
                Sitio web creado por Mauricio Cárdenas, matemático y profesor.
            </p>
            <p>
                Tengo años de experiencia enseñando a cientos de estudiantes de
                todo nivel: básico-bachillerato, universitario y post
                universitario.
            </p>
            <p>Registrate a nuestros cursos presenciales. O visita el Blog.</p>

            <div class="hero-actions">
                <a href="/courses" class="btn">Cursos Universitarios</a>
                <a href="/blog" class="btn">Blog</a>
            </div>
        </div>

        <div class="hero-image">
            <img
                src="images/brand/favicon.webp"
                alt="Ilustración Mautematicas"
            />
        </div>
    </div>
</section>

<style>
    .hero-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: center;
    }

    .hero-content {
        background: #f8fafc;
        padding: 3rem;
        border-radius: 12px;
    }

    .hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-image img {
        max-width: 100%;
        max-height: 200px;
        object-fit: contain;
    }

    /* Desktop View: 2/3 (content) and 1/3 (image) */
    @media (min-width: 768px) {
        .hero-grid {
            grid-template-columns: 2fr 1fr;
        }
    }
</style>
