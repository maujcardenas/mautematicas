<script>
    let Subjects = $state([
        {
            title: "Cálculo Diferencial e Integral",
            image: "/images/brand/calculo-dif-int.png",
            alt: "Proyecto 1",
        },
        {
            title: "Cálculo Multivariable",
            image: "/images/brand/calculo-multivariable.png",
            alt: "Proyecto 2",
        },
        {
            title: "Álgebra Lineal",
            image: "/images/brand/algebra-lineal.png",
            alt: "Proyecto 3",
        },
        {
            title: "Matemáticas Discretas",
            image: "/images/brand/mat-discretas.png",
            alt: "Proyecto 4",
        },
        {
            title: "Estadística",
            image: "/images/brand/estadistica.png",
            alt: "Proyecto 5",
        },
        {
            title: "Ecuaciones Diferenciales",
            image: "/images/brand/ec-diferenciales.png",
            alt: "Proyecto 6",
        },
        {
            title: "Física I: Mecánica",
            image: "/images/brand/fisica-i.png",
            alt: "Proyecto 7",
        },
        {
            title: "Física II: Electromagnetismo",
            image: "/images/brand/fisica-ii.png",
            alt: "Proyecto 8",
        },
    ]);
</script>

<section>
    <h2 class="section-title" id="materias">Materias</h2>
    <div class="grid-2">
        {#each Subjects as subject (subject.title)}
            <!-- <div class="card"> -->
            <img src={subject.image} alt={subject.alt} />
            <!-- </div> -->
        {/each}
    </div>
</section>

<style>
</style>
