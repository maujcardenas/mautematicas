<script>
    import LinkedInLogo from "$lib/components/LinkedInLogo.svelte";
    import YouTubeLogo from "$lib/components/YouTubeLogo.svelte";
    import WhatsAppLogo from "$lib/components/WhatsAppLogo.svelte";
</script>

<header>
    <div class="header-container">
        <div class="header-part">
            <!-- 1a. Logo principal -->
            <div class="logo-section">
                <a href="/" class="brand-link">
                    <img
                        src="/images/brand/logoMautematicas-darkbg-t.png"
                        alt="Logo Mautematicas"
                        width="500"
                        height="500"
                    />
                </a>
            </div>

            <!-- 1b. Menú de Navegación -->
            <nav class="nav-menu">
                <a href="/">Inicio</a>
                <a href="/tutorias">Tutorías</a>
                <a href="/cursos">Cursos</a>
                <a href="/blog">Blog</a>
                <a href="/#contacto">Contacto</a>
            </nav>
        </div>
        <div class="header-part">
            <!-- 2a. Menú de Navegación -->
            <!-- <div class="login-section">
                <a href="/login" class="login-link">Iniciar sesión</a>
            </div> -->

            <!-- 2b. Íconos de Redes Sociales -->
            <div class="social-icons">
                <a
                    href="https://www.linkedin.com/in/mauriciojc/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInLogo />
                </a>
                <a
                    href="https://www.youtube.com/@mautematicas"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <YouTubeLogo />
                </a>
                <a
                    href="https://wa.me/593984029541"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsAppLogo />
                </a>
            </div>
        </div>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #0c325a;
        border-bottom: 1px solid #2a2829;
        z-index: 1000;
    }

    .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0.75rem 1.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }

    .header-part {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 1.5rem;
    }

    .brand-link {
        display: inline-block;
        line-height: 0;
    }

    .brand-link img {
        width: auto;
        height: 32px; /* Ligeramente superior a los 24px */
        aspect-ratio: 1 / 1;
        object-fit: contain;
    }

    .nav-menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    .nav-menu a {
        color: #ffffff;
        font-weight: 500;
        /* font-size: 0.95rem; */
        text-decoration: none;
        transition: opacity 0.2s;
        white-space: nowrap;
    }

    .nav-menu a:hover {
        opacity: 0.8;
    }

    .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .login-link {
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        padding: 0.4rem 0.8rem;
        border: 1px solid #ffffff;
        border-radius: 4px;
        transition:
            background-color 0.2s,
            color 0.2s;
        white-space: nowrap;
    }

    .login-link:hover {
        background-color: #ffffff;
        color: #0c325a;
    }
</style>
