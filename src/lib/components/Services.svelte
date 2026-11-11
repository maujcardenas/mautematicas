<script>
    const servicios = [
        {
            title: "Tutorías 1-1 de Física y Matemáticas",
            description: "Agenda una clase privada virtual",
            features: [
                "Materias universitarias",
                "Ingreso a universidades",
                "Estadística para investigación",
                "Preparación para concursos/olimpiadas",
                "Clases con horarios flexibles",
            ],
            buttonLink: "/tutorias",
            buttonText: "Agendar clase",
        },
        {
            title: "Blog educativo",
            description:
                "Clases, guías de estudio universitarias, consejos, anécdotas, curiosidades",
            features: [
                "Matemáticas recreativas",
                "Consejos de aprendizaje",
                "Guías de estudio",
                "Resolución de problemas y ejercicios",
                "Anécdotas matemáticas",
            ],
            buttonLink: "/blog",
            buttonText: "Mirar Blog",
        },
        {
            title: "Cursos completos",
            description:
                "Cursos grupales presenciales para tus materias universitarias",
            features: [
                "Cálculo Diferencial (I)",
                "Cálculo Integral (II)",
                "Cálculo Multivariable (III)",
                "Ecuaciones Diferenciales",
                "Álgebra Lineal",
            ],
            buttonLink: "/cursos",
            buttonText: "Registrarte Cursos en Vivo",
        },
    ];
</script>

<section>
    <h2 class="section-title" id="servicios">Servicios</h2>
    <div class="grid-2">
        {#each servicios as servicio}
            <article class="card card-between">
                <div class="service-content">
                    <h3>{servicio.title}</h3>
                    <p>{servicio.description}</p>
                    <ul class="feature-list">
                        {#each servicio.features as feature}
                            <li class="pill">{feature}</li>
                        {/each}
                    </ul>
                </div>
                <a href={servicio.buttonLink} class="btn"
                    >{servicio.buttonText}</a
                >
            </article>
        {/each}
    </div>
</section>

<style>
    .service-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .feature-list {
        margin-top: 1rem;
        padding-left: 0rem;
        list-style-type: none;
    }

    .feature-list li {
        margin: 0.5rem 0rem;
    }
</style>
