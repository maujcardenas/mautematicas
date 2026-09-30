<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import Specialties from "$lib/components/Specialties.svelte";
</script>

<HeroSection />
<Specialties />

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
