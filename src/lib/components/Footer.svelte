<footer>
    <div class="grid">
        <div>
            <strong>LOGO</strong>
            <p style="color: #888888; margin-top: 0.5rem; font-size: 0.85rem;">
                Ingeniería y Desarrollo
            </p>
        </div>
        <div class="menu">
            <a href="/">Inicio</a>
            <a href="#archive">Artículos</a>
            <a href="#contact">Contacto</a>
        </div>
        <div class="contact">
            <a href="mailto:info@correo.com">info@correo.com</a>
            <a href="#">WhatsApp</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #ffffff;
        border-top: 1px solid #888888;
        padding: 2rem 1rem;
        margin-top: 2rem;
    }
    .grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;
    }
    .menu,
    .contact {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .menu a,
    .contact a {
        color: #111111;
        font-size: 0.9rem;
    }
    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
