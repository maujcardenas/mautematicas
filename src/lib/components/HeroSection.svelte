<script>
</script>

<section>
    <div class="hero-grid">
        <div class="hero-content">
            <span class="hero-badge">
                Próximo Curso Presencial:
                <span class="pill"> 5 Enero, 2027 </span>
            </span>
            <h1>Mautematicas</h1>
            <p>
                Sitiso creado por mi, Mauricio Cárdenas, matemático y profesor.
            </p>
            <p>
                Tengo muchísimos años de experiencia y cientos de estudiantes a
                los que he podido ayudar con sus materias matemáticas.
            </p>
            <p>
                En este sitio puedes unirte a nuestros cursos grupales
                presenciales para Quito, Ecuador.
            </p>
            <p>
                Para cualquier lector del mundo, puedes encontrar articulos
                educativos, recreativos, interesantes sobre matemáticas
                generales.
            </p>
            <p>
                Registrate a nuestros próximos cursos de materias
                universitarias.
            </p>

            <div class="hero-actions">
                <a href="#courses" class="btn"
                    >Cursos Universitarios Presenciales</a
                >
                <a href="#blog" class="btn">Artículos Educativos Blog</a>
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
        padding: 1.5rem;
        border-radius: 12px;
    }

    /* .hero-content h1 {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .hero-content p {
        margin-bottom: 2rem;
        line-height: 1.6;
    } */

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
