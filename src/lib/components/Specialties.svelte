<script>
    const servicios = [
        {
            title: "Tutorías de Física y Matemáticas",
            description: "Puedes agendar una tutoría en línea.",
            features: [
                "Clases en matemáticas de todo nivel: escolares, universitarias, ingreso a programas, preparación para exámenes/olimpiadas, estadística de investigación.",
                "Después de la clase tendrás todo el material discutido / apuntado en formato pdf",
                "Horarios a acordar",
                "Profesor con muchísima experiencia y personalizado a tus habilidades, aptitudes y objetivos",
            ],
            buttonText: "Agendar clase",
        },
        {
            title: "Blog educativo",
            description:
                "Artículos sobre temas interesantes en matemáticas, clases sobre las materias o capítulos de las materias, problemas resueltos, y consejos para estudiar y aprender efectivamente matemáticas.",
            features: [
                "Los artículos son de mi autoría, no son generados con IA. Aunque en la investigación de los mismos la IA pudo ayudar, el resultado final de cada artículo es de autoría y revisión humana",
                "Consejos sobre cómo aprender, no desanimarse, crear confianza y habilidad en matemáticas",
                "Artículos relacionando las matemáticas con la vida diaria o la filosofía",
                "Mucho énfasis en la solución de problemas y las técnicas para resolver problemas",
            ],
            buttonText: "Mirar Blog",
        },
        {
            title: "Cursos completos",
            description:
                "Cursos en línea sobre distintas materias universitarias.",
            features: [
                "Por el momento están en construcción.",
                "Serán cursos universitarios sobre:",
                "Cálculo Diferencial e Integral",
                "Cálculo Multivariable (III)",
                "Ecuaciones Diferenciales",
                "Álgebra Lineal",
            ],
            buttonText: "En construcción",
        },
    ];
</script>

<section>
    <h2 class="section-title">Servicios</h2>
    <div class="grid-2">
        {#each servicios as servicio}
            <article class="card card-body">
                <div class="service-content">
                    <h3>{servicio.title}</h3>
                    <p>{servicio.description}</p>
                    <ul class="feature-list">
                        {#each servicio.features as feature}
                            <li>{feature}</li>
                        {/each}
                    </ul>
                </div>
                <button class="btn">{servicio.buttonText}</button>
            </article>
        {/each}
    </div>
</section>

<style>
    .card-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .service-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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
