<footer>
    <div class="footer-grid">
        <div class="col">
            <span class="brand-title">Mautematicas</span>
            <div class="logo">
                <a href="/" class="brand-link">
                    <img
                        src="/images/brand/favicon.webp"
                        alt="Logo Tu Sitio WP"
                        width="500"
                        height="500"
                    />
                </a>
            </div>
            <p>Ayuda para tus materias en matemáticas.</p>
        </div>
        <div class="col">
            <h4 class="col-title">Menú Principal</h4>
            <a href="/">Inicio</a>
            <a href="#materias">Materias</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#servicios">Servicios</a>
            <a href="/blog">Blog</a>
            <a href="#contacto">Contacto</a>
        </div>
        <div class="col">
            <h4 class="col-title">Contacto y Redes</h4>
            <a href="mailto:mau@mauriciojc.com">mau@mauriciojc.com</a>
            <a href="https://wa.me/593984029541">WhatsApp</a>
            <a href="https://linkedin.com/in/mauriciojc">LinkedIn</a>
            <a href="https://youtube.com/@mautematicas">YouTube</a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #0c325a;
        border-top: 1px solid #2a2829;
        padding: 3rem 2rem;
    }
    .brand-link {
        display: inline-block;
        line-height: 0;
    }
    .brand-link img {
        width: 100%;
        max-width: 150px;
        height: auto;
        aspect-ratio: 2 / 1;
        object-fit: contain;
    }
    .footer-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    .col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .col a {
        color: #e0f2fe;
    }
    .brand-title {
        color: #ffffff;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .col-title {
        color: #ffffff;
    }
    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
        }
    }
    p {
        color: #ffffff;
    }
</style>
