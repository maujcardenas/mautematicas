<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import Subjects from "$lib/components/Subjects.svelte";
    import Reviews from "$lib/components/Reviews.svelte";
    import Services from "$lib/components/Services.svelte";
    import BlogTable from "$lib/components/BlogTable.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";

    let { data } = $props();
    let articles = $derived(data.recentPosts);
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
</style>
