<script>
	// Arreglo de testimonios con estado reactivo (Svelte 5)
	let testimonials = $state([
		{
			id: 1,
			name: "María García",
			role: "Estudiante de Programación",
			comment:
				"El curso superó mis expectativas. La explicación teórica combinada con ejercicios prácticos hizo que los conceptos complejos fueran fáciles de asimilar.",
			rating: 5,
		},
		{
			id: 2,
			name: "Carlos Mendoza",
			role: "Desarrollador Junior",
			comment:
				"Excelente metodología. La atención directa a las dudas durante las clases es el valor diferencial de esta formación.",
			rating: 5,
		},
		{
			id: 3,
			name: "Ana Lucía Torres",
			role: "Estudiante de Ciencia de Datos",
			comment:
				"El material de estudio está actualizado y rigurosamente estructurado. Totalmente recomendable para quienes buscan bases sólidas.",
			rating: 5,
		},
	]);
</script>

<section class="testimonials-container">
	<h2>Testimonios de estudiantes</h2>

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

	h2 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 1.75rem;
		color: #1a1a1a;
	}

	.grid-2 {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.testimonial-card {
		border: 1px solid #2a2829;
		background-color: #f8f3f2;
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
		color: #e67e22;
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
