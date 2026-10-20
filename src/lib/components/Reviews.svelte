<script>
	// Arreglo de testimonios con estado reactivo (Svelte 5)
	let testimonials = $state([
		{
			id: 1,
			name: "David M",
			role: "Cálculo Multivariable",
			comment: "Se las sabe todas y es super paciente",
			rating: 5,
		},
		{
			id: 2,
			name: "Rubi Basantes",
			role: "Cálculo I y II",
			comment:
				"Son unas clases excelentes, el profesor nos ayudó a entender a detalle muchos de los procesos matemáticos, tiene mucha paciencia, Muy recomendadas las clases",
			rating: 5,
		},
		{
			id: 3,
			name: "Ricardo Oña",
			role: "Matematicas y Física",
			comment:
				"Mauri es un profesor apasionado por lo que enseña, y esa pasión se nota en cada clase: la transmite con naturalidad y logra contagiarla a sus estudiantes. Su método es claro y sencillo, y lo adapta a las necesidades y al ritmo de cada alumno, lo que facilita el aprendizaje y hace que las clases se sientan cercanas y efectivas.",
			rating: 5,
		},
	]);
</script>

<section class="testimonials-container">
	<h2 class="section-title">Testimonios de estudiantes</h2>

	<div class="grid-2">
		{#each testimonials as item (item.id)}
			<article class="testimonial-card">
				<header class="card-header">
					<div class="author-info">
						<h3>{item.name}</h3>
						<span class="role">{item.role}</span>
					</div>
					<div
						class="rating"
						aria-label={`Calificación: ${item.rating} de 5 estrellas`}
					>
						{"★".repeat(item.rating)}
					</div>
				</header>

				<blockquote class="comment">
					<p>"{item.comment}"</p>
				</blockquote>
			</article>
		{/each}
	</div>
</section>

<style>
	.testimonials-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.grid-2 {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.testimonial-card {
		/* border: 1px solid #2a2829; */
		background-color: #f8fafc;
		border-radius: 12px;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 1rem;
	}

	.author-info h3 {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 600;
		color: #2a2829;
	}

	.role {
		font-size: 0.85rem;
		color: #666;
		display: block;
		margin-top: 0.25rem;
	}

	.rating {
		color: #0c325a;
		font-size: 1.1rem;
		letter-spacing: 2px;
		white-space: nowrap;
	}

	.comment {
		margin: 0;
		padding: 0;
		font-style: italic;
		color: #333;
		line-height: 1.5;
	}

	.comment p {
		margin: 0;
	}
</style>
