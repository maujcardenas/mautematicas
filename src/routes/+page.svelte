<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import Subjects from "$lib/components/Subjects.svelte";
    import Reviews from "$lib/components/Reviews.svelte";
    import Services from "$lib/components/Services.svelte";
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
</script>

<div class="layout-container">
    <HeroSection />
    <Subjects />
    <Reviews />
    <Services />
    <BlogTable {articles} />
    <ContactForm />
</div>

<style>
    .layout-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
</style>
