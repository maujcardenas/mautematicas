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
            <a href="#tutorias" class="btn">Clases Privadas</a>
            <a href="#courses-self-paced" class="btn">Cursos Asincrónicos</a>
            <a href="#courses-live" class="btn">Cursos en vivo</a>
        </div>
    </div>
</section>

<style>
    .hero {
        padding: 6rem 0rem;
    }

    .hero-content {
        max-width: 600px;
        /* margin: 0 auto; */
        background: #f8fafc;
        padding: 2rem;
        border-radius: 12px;
    }

    .hero-description {
        color: #2a2829;
    }

    .hero-actions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
        gap: 1rem;
    }

    .btn-dark {
        background-color: #2a2829;
    }
</style>
