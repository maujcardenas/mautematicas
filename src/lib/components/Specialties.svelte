<script>
    // Componente de especialidades y ventajas
</script>

<section>
    <h2>Servicios</h2>
    <p class="section-subtitle">¿Qué puedes encontrar en esta página web.</p>

    <div class="grid-3">
        <!-- Tutorías de Física y Matemáticas -->
        <div class="card card-body">
            <h3>Tutorías de Física y Matemáticas</h3>
            <p>Puedes agendar una tutoría en línea.</p>
            <ul class="feature-list">
                <li>
                    Clases en matemáticas de todo nivel: escolares,
                    universitarias, ingreso a programas, preparación para
                    exámenes/olimpiadas, estadística de investigación.
                </li>
                <li>
                    Después de la clase tendrás todo el material discutido /
                    apuntado en formato pdf
                </li>
                <li>Horarios a acordar</li>
                <li>
                    Profesor con muchísima experiencia y personalizado a tus
                    habilidades, aptitudes y objetivos
                </li>
            </ul>
            <button class="btn"> Agendar clase</button>
        </div>

        <!-- Blog de aprendizaje o consejos matemáticos -->
        <div class="card card-body">
            <h3>Blog educativo</h3>
            <p>
                Artículos sobre temas interesantes en matemáticas, clases sobre
                las materias o capítulos de las materias, problemas resueltos, y
                consejos para estudiar y aprender efectivamente matemáticas.
            </p>
            <ul class="feature-list">
                <li>
                    Los artículos son de mi autoría, no son generados con IA.
                    Aunque en la investigación de los mismos la IA pudo ayudar,
                    el resultado final de cada artículo es de autoría y revisión
                    humana
                </li>
                <li>
                    Consejos sobre cómo aprender, no desanimarse, crear
                    confianza y habilidad en matemáticas
                </li>
                <li>
                    Artículos relacionando las matemáticas con la vida diaria o
                    la filosofía
                </li>
                <li>
                    Mucho énfasis en la solución de problemas y las técnicas
                    para resolver problemas
                </li>
            </ul>
            <button class="btn"> Mirar Blog</button>
        </div>

        <!-- Cursos completos -->
        <div class="card card-body">
            <h3>Cursos completos</h3>
            <p>Cursos en línea sobre distintas materias universitarias.</p>
            <ul class="feature-list">
                <li>Por el momento están en construcción.</li>
            </ul>
        </div>
    </div>
</section>

<style>
    .section-subtitle {
        color: #a1a1aa;
        margin-bottom: 1.5rem;
    }

    .grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    .card {
        background-color: #f8fafc;
        border: 1px solid #2a2829;
        border-radius: 12px;
        overflow: hidden;
        color: #ffffff;
    }

    .card-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .card h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .card p {
        color: #2a2829;
        line-height: 1.4;
    }

    .feature-list {
        margin-top: 1rem;
        padding-left: 1.2rem;
        color: #2a2829;
    }

    .feature-list li {
        margin-bottom: 0.5rem;
        line-height: 1.3;
    }
</style>
