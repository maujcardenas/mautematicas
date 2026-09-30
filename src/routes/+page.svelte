<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import BlogCategories from "$lib/components/BlogCategories.svelte";
    import ReviewsEmbed from "$lib/components/ReviewsEmbed.svelte";
    import Specialties from "$lib/components/Specialties.svelte";
    import BlogTable from "$lib/components/BlogTable.svelte";
    import Packages from "$lib/components/Packages.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";
    import LearnCallout from "$lib/components/LearnCallout.svelte";

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
                "Lo único permanente es el cambio, y la derivada es una forma matemática de estudiarlo. Aprende todo sobre el cálculo, inventado por Newton y Liebniz, revolucionando al mundo.",
            image: "/images/brand/calculo-dif-int.png",
            alt: "Proyecto 1",
        },
        {
            title: "Cálculo Multivariable",
            description:
                "Los increíbles teoremas fundamentales en 3D, esenciales para el electromagnetismo, la mecánica de fluidos y supremamente impresionantes en análisis real.",
            image: "/images/brand/calculo-multivariable.png",
            alt: "Proyecto 2",
        },
        {
            title: "Álgebra Lineal",
            description:
                "Al inicio parece que son solo matrices y sistemas de ecuaciones, luego se ve que es el estudio de las transformaciones en el espacio o sus equivalentes, y luego se conoce que podría ser el tejido de la realidad. Y todo esto tiene una infinidad de aplicaciones en el mundo estadístico, físico, computacional.",
            image: "/images/brand/algebra-lineal.png",
            alt: "Proyecto 3",
        },
        {
            title: "Matemáticas Discretas",
            description:
                "Cuando pensabas que contar cosas era fácil, se nos ocurrió estudiar los números naturales, las combinaciones, los algoritmos, los grafos.",
            image: "/images/brand/mat-discretas.png",
            alt: "Proyecto 4",
        },
        {
            title: "Estadística",
            description:
                "Adquiere la habilidad de hacer estudios científicos, de saber el valor p de tus hipótesis, de analizar e interpretar datos que hoy vienen en masa.",
            image: "/images/brand/estadistica.png",
            alt: "Proyecto 5",
        },
        {
            title: "Ecuaciones Diferenciales",
            description:
                "El lenguaje de las leyes físicas, conoce que son los atractores o repulsores, y dale una miradita al caos",
            image: "/images/brand/ec-diferenciales.png",
            alt: "Proyecto 6",
        },
        {
            title: "Física I: Mecánica",
            description:
                "Por si te preguntabas cómo se mueven las cosas, y ¿por qué?, advertencia: seguimos sin saberlo",
            image: "/images/brand/fisica-i.png",
            alt: "Proyecto 7",
        },
        {
            title: "Física II: Electromagnetismo",
            description:
                "El camino hacia la luz, cuando los físicos pensaron que habían resuelto la física con este último gran tema, la velocidad de la luz fue el origen de todo el derrumbe de la física clásica y el nacimiento de la física cuántica. Adéntrate en el entendimiento de los campos electro-magnéticos",
            image: "/images/brand/fisica-ii.png",
            alt: "Proyecto 8",
        },
    ];
</script>

<HeroSection />

<div class="layout-container">
    <!-- <BlogCategories blogCategories={blogCateg} /> -->
    <ReviewsEmbed />
    <Specialties />
    <BlogTable {articles} />

    <Packages />
    <LearnCallout />
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
