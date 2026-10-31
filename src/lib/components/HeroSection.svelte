<script>
</script>

<section class="hero">
    <div class="hero-grid">
        <div class="hero-content">
            <span class="hero-badge">Próximo Cohorte en Vivo: [Fecha]</span>
            <h1>Dominio de Matemáticas Universitarias</h1>
            <p>
                Sitio creado por Mauricio Cárdenas, matemático y profesor.
                Estudia matemáticas universitarias conmigo a través de clases en
                vivo en grupos reducidos, o agenda tutorías personalizadas.
                <em
                    >¿Buscas cursos a tu propio ritmo? Únete a la lista de
                    espera prioritaria.</em
                >
            </p>
            <div class="hero-actions">
                <a href="#courses-live" class="btn btn-primary"
                    >Ver Cursos en Vivo</a
                >
                <a href="#waitlist" class="btn btn-secondary"
                    >Lista de Espera (Asincrónicos)</a
                >
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
    .hero {
        padding: 4rem 0;
    }

    .hero-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: center;
    }

    .hero-content {
        background: #f8fafc;
        padding: 2.5rem;
        border-radius: 12px;
    }

    .hero-content h1 {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .hero-content p {
        margin-bottom: 2rem;
        line-height: 1.6;
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
        /* Order ensures image is first on mobile, second on desktop */
        order: -1;
    }

    .hero-image img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

    /* Desktop View: 2/3 (content) and 1/3 (image) */
    @media (min-width: 768px) {
        .hero-grid {
            grid-template-columns: 2fr 1fr;
        }

        .hero-image {
            order: 0; /* Resets order back to right column on desktop */
        }
    }
</style>
