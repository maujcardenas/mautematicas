<script>
    // Componente de especialidades y ventajas
</script>

<section>
    <h2>Nuestras Especialidades</h2>
    <p class="section-subtitle">¿Qué puedes encontrar en esta página web.</p>

    <div class="grid-3">
        <!-- Tutorías de Física y Matemáticas -->
        <div class="card card-body">
            <h3>Tutorías de Física y Matemáticas</h3>
            <p>
                Puedes agendar una clase de matemáticas como apoyo para tus
                materias. Si tienes un tema, un deber, un examen en el futuro
                que necesitas revisar sobre cualquier cosa de matemáticas puedes
                contar con mis tutorías. Cientos de horas de experiencia.
            </p>
            <ul class="feature-list">
                <li>
                    Clases en matemáticas escolares, universitarias, de grado o
                    posgrado.
                </li>
                <li>Ayuda para olimpiadas o concursos matemáticos.</li>
            </ul>
        </div>

        <!-- Blog de aprendizaje o consejos matemáticos -->
        <div class="card card-body">
            <h3>Blog educativo</h3>
            <p>
                Comunicación profesional y encriptada, desde planes básicos
                hasta almacenamiento premium. Proyecta máxima profesionalidad en
                cada mensaje con tu propio dominio corporativo.
            </p>
            <ul class="feature-list">
                <li>Consejos sobre cómo estudiar matemáticas efectivamente</li>
                <li>Clases sobre algunos temas conocidos por su dificultad.</li>
            </ul>
        </div>

        <!-- Cursos completos -->
        <div class="card card-body">
            <h3>Cursos completos</h3>
            <p>Cursos en línea sobre distintas materias universitarias.</p>
            <ul class="feature-list">
                <li>
                    Varias reuniones (4-7) iterativas para completa
                    satisfacción.
                </li>
                <li>
                    Diseño adaptable para desktop, laptop, tablet y smartphone.
                </li>
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
