<script>
    //Hero Component
</script>

<section>
    <div class="hero-grid">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="text-accent"> Próximos Cursos Presenciales:</span>
                <span class="pill"> 5 Enero, 2027 </span>
                <span class="pill"> Quito, Ecuador </span>
            </div>

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
    .hero-badge {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px; /* Adjust spacing between elements as needed */
    }

    .text-accent {
        font-weight: bold;
        color: #ff7a00; /* Replace with your preferred orange shade */
        flex: 0 0 100%; /* Forces it to take up the full width (new row) on mobile */
    }

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
