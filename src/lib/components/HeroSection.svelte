<script>
    // Componente Hero Principal
</script>

<section class="hero">
    <div class="hero-content">
        <h1>Mautematicas</h1>
        <p class="hero-description">
            Sitio creado por Mauricio Cárdenas, matemático y profesor. Puedes
            agendar tutorías personalizadas, registrarte en mis cursos: unos son
            asincrónicos auto-dirigidos (puedes comenzarlos cuando desees e ir a
            tu ritmo), y otros sincrónico en-vivo (tienen un calendario
            específico y nos reunimos a estudiar juntos), y/o leer artículos
            sobre matemáticas universitarias, algunos son tutoriales o clases
            otros son anécdotas y consejos. Bienvenido.
        </p>
        <div class="hero-actions">
            <a href="#blog" class="btn">Artículos del Blog</a>
            <a href="#blog" class="btn btn-dark">Clases Privadas</a>
            <a href="#book-class" class="btn">Cursos Asincrónicos</a>
            <a href="#book-class" class="btn btn-dark">Cursos en vivo</a>
        </div>
    </div>
</section>

<style>
    .hero {
        /* background-image: url("/images/brand/banner.jpg"); */
        /* background-size: cover; */
        /* background-position: center; */
        padding: 6rem 2rem;
        /* text-align: center; */
        /* background-color: #e0f2fe; */
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        background: #f8fafc;
        padding: 2rem;
        border-radius: 12px;
        /* border: 1px solid #2a2829; */
    }

    .hero-description {
        color: #2a2829;
    }

    .hero-actions {
        display: grid;
        /* Automatically switches between 2 columns and 1 column based on the 200px threshold */
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
        gap: 1rem;
    }

    .btn-dark {
        background-color: #2a2829;
    }
</style>
