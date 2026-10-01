<script>
    // Componente de contacto
</script>

<section id="contacto">
    <h2 class="section-title">Contacto</h2>
    <div class="grid-2">
        <div class="card card-body">
            <h2>Contáctanos</h2>
            <form>
                <div class="form-group">
                    <label class="form-label" for="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        class="input-field"
                        placeholder="Tu nombre"
                    />
                </div>
                <div class="form-group">
                    <label class="form-label" for="correo">Correo</label>
                    <input
                        id="correo"
                        type="email"
                        class="input-field"
                        placeholder="correo@ejemplo.com"
                    />
                </div>
                <div class="form-group">
                    <label class="form-label" for="mensaje">Mensaje</label>
                    <textarea id="mensaje" class="input-field" rows="4"
                    ></textarea>
                </div>
                <button type="button" class="btn">Enviar Mensaje</button>
            </form>
        </div>
        <div>
            <img
                src="/images/brand/mau-selfie.jpg"
                alt="Mauri - Photo"
                class="contact-image"
            />
            <p>
                Aquí turisteando (en el Pailón del Diablo, Baños, Ec) sin hacer
                matemáticas
            </p>
            <p>Mauricio Cárdenas - Autor/Profesor para este blog</p>
        </div>
    </div>
</section>

<style>
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .card {
        background-color: #e0f2fe;
        border: 1px solid #2a2829;
        border-radius: 12px;
        overflow: hidden;
    }

    .card-body {
        padding: 1.5rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-label {
        color: #2a2829;
        display: block;
        margin-bottom: 0.25rem;
    }

    .input-field {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #2a2829;
        border-radius: 4px;
        background-color: #f8fafc;
        color: #2a2829;
        box-sizing: border-box;
    }

    .contact-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
