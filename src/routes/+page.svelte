<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import BlogCategories from "$lib/components/BlogCategories.svelte";
    import Reviews from "$lib/components/Reviews.svelte";
    import Specialties from "$lib/components/Specialties.svelte";
    import BlogTable from "$lib/components/BlogTable.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";

    const articles = [
        {
            id: "dom",
            title: "Ser malo en mate es un mito",
            category: "Consejos",
        },
        {
            id: "h6",
            title: "Los logaritmos son una tecnología del diablo",
            category: "anual",
        },
        {
            id: "h10",
            title: "La prueba de sin(x)/x hacia 1",
            category: "Cálculo Diferencial e Integral",
        },
    ];

    const blogCateg = [
        {
            title: "Cálculo Diferencial e Integral",
            description:
                "Estudio del cambio continuo mediante límites, derivadas e integrales, unificados por el Teorema Fundamental. Constituye una herramienta indispensable para modelar sistemas en ciencias e ingeniería.",
            image: "/images/brand/calculo-dif-int.png",
            alt: "Proyecto 1",
        },
        {
            title: "Cálculo Multivariable",
            description:
                "Extensión del cálculo al espacio n-dimensional mediante campos escalares y vectoriales, derivadas parciales e integrales múltiples. Fundamental para comprender la mecánica de fluidos, la optimización y el electromagnetismo.",
            image: "/images/brand/calculo-multivariable.png",
            alt: "Proyecto 2",
        },
        {
            title: "Álgebra Lineal",
            description:
                "Análisis de espacios vectoriales, matrices y transformaciones lineales. Proporciona la estructura base para la computación científica, el aprendizaje automático, la mecánica cuántica, el tratamiento de datos y de hecho miles de aplicaciones.",
            image: "/images/brand/algebra-lineal.png",
            alt: "Proyecto 3",
        },
        {
            title: "Matemáticas Discretas",
            description:
                "Estudio de estructuras discontinuas como grafos, conjuntos, lógica formal y combinatoria. Es el fundamento teórico clave de las ciencias de la computación, la criptografía y el análisis algorítmico.",
            image: "/images/brand/mat-discretas.png",
            alt: "Proyecto 4",
        },
        {
            title: "Estadística",
            description:
                "Modelado probabilístico, inferencia y contraste de hipótesis para la interpretación de los experimentos científicos. Esencial para la toma de decisiones basada en evidencia y el análisis de datos a gran escala.",
            image: "/images/brand/estadistica.png",
            alt: "Proyecto 5",
        },
        {
            title: "Ecuaciones Diferenciales",
            description:
                "Modelado matemático de razones de cambio interdependientes,  métodos analíticos y números para hallar soluciones y estudiar comportamiento de sistemas dinámicos. Esencial para describir fenómenos evolutivos en física, biología y economía.",
            image: "/images/brand/ec-diferenciales.png",
            alt: "Proyecto 6",
        },
        {
            title: "Física I: Mecánica",
            description:
                "Formulación de las leyes de Newton, conservación de energía, momento y dinámica de rotación. Otorga el marco necesario para comprender las interacciones fundamentales del movimiento clásico.",
            image: "/images/brand/fisica-i.png",
            alt: "Proyecto 7",
        },
        {
            title: "Física II: Electromagnetismo",
            description:
                "Análisis de campos eléctricos y magnéticos unificados mediante las ecuaciones de Maxwell y ondas electromagnéticas. Fundamental para comprender la tecnología moderna (electricidad, magnetismo, potencia) y la transición histórica hacia la física moderna.",
            image: "/images/brand/fisica-ii.png",
            alt: "Proyecto 8",
        },
    ];
</script>

<HeroSection />

<div class="layout-container">
    <BlogCategories blogCategories={blogCateg} />
    <Reviews />
    <Specialties />
    <BlogTable {articles} />
    <ContactForm />
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    :global(section) {
        margin: 4rem 0;
    }
</style>
