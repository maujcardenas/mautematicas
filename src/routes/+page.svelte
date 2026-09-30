<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import Specialties from "$lib/components/Specialties.svelte";
    import BlogCategories from "$lib/components/BlogCategories.svelte";
    import BlogTable from "$lib/components/BlogTable.svelte";

    const blogCateg = [
        {
            title: "Cálculo Diferencial e Integral",
            description:
                "Lo único permanente es el cambio, y la derivada es una forma matemática de estudiarlo. Aprende todo sobre el cálculo, inventado por Newton y Liebniz, revolucionando al mundo.",
            image: "/images/brand/calculo-dif-int.png",
            alt: "Proyecto 1",
        },
    ];
    const articles = [
        {
            id: "dom",
            title: "Ser malo en mate es un mito",
            category: "Consejos",
        },
    ];
</script>

<HeroSection />
<Specialties />
<BlogCategories blogCategories={blogCateg} />
<BlogTable {articles} />

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
