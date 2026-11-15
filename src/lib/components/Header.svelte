<script>
    import LinkedInLogo from "$lib/components/LinkedInLogo.svelte";
    import YouTubeLogo from "$lib/components/YouTubeLogo.svelte";
    import WhatsAppLogo from "$lib/components/WhatsAppLogo.svelte";
</script>

<header>
    <div class="header-container">
        <div class="header-grid">
            <!-- 1. Logo principal -->
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

            <!-- 2. Menú de Navegación (dividido en 2 bloques de 4 items para el reflujo responsivo) -->
            <nav class="nav-group nav-group-1">
                <a href="/">Inicio</a>
                <a href="/#materias">Materias</a>
                <a href="/#testimonios">Testimonios</a>
                <a href="/#servicios">Servicios</a>
            </nav>

            <nav class="nav-group nav-group-2">
                <a href="/tutorias">Tutorías</a>
                <a href="/cursos">Cursos</a>
                <a href="/blog">Blog</a>
                <a href="/#contacto">Contacto</a>
            </nav>

            <!-- 3. Menú de Iniciar Sesión -->
            <div class="login-section">
                <a href="/login" class="login-link">Iniciar sesión</a>
            </div>

            <!-- 4. Íconos de Redes Sociales -->
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
    }

    /* --- Estructura Grid Principal (Desktop: 1 sola fila) --- */
    .header-grid {
        display: grid;
        grid-template-areas: "logo nav1 nav2 login socials";
        grid-template-columns: auto auto auto auto auto;
        align-items: center;
        justify-content: space-between;
        gap: 1.25rem;
    }

    .logo-section {
        grid-area: logo;
    }

    .nav-group-1 {
        grid-area: nav1;
    }

    .nav-group-2 {
        grid-area: nav2;
    }

    .login-section {
        grid-area: login;
    }

    .social-icons {
        grid-area: socials;
        display: flex;
        align-items: center;
        gap: 0.85rem;
    }

    /* --- Elementos --- */
    .brand-link {
        display: inline-block;
        line-height: 0;
    }

    .brand-link img {
        width: auto;
        height: 32px; /* Ligeramente superior a los 24px de los íconos sociales y manteniendo proporción cuadrada */
        aspect-ratio: 1 / 1;
        object-fit: contain;
    }

    .nav-group {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .nav-group a {
        color: #ffffff;
        font-weight: 500;
        font-size: 0.95rem;
        text-decoration: none;
        transition: opacity 0.2s;
        white-space: nowrap;
    }

    .nav-group a:hover {
        opacity: 0.8;
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

    :global(.social-icons svg) {
        width: 24px;
        height: 24px;
    }

    /* --- Diseño Responsivo --- */

    /* Tablet: 2 filas (Fila 1: Logo + Menú completo | Fila 2: Login + Redes) */
    @media (max-width: 1100px) {
        .header-grid {
            grid-template-areas:
                "logo nav1 nav2"
                "login socials socials";
            grid-template-columns: auto auto auto;
            justify-content: flex-start;
            gap: 1rem 1.5rem;
        }
    }

    /* Pantallas más pequeñas: 3 filas (Fila 1: Logo + 4 items | Fila 2: 4 items | Fila 3: Login + Redes) */
    @media (max-width: 850px) {
        .header-grid {
            grid-template-areas:
                "logo nav1"
                "nav2 nav2"
                "login socials";
            grid-template-columns: auto 1fr;
        }
        .social-icons {
            justify-content: flex-end;
        }
    }

    /* Pantallas angostas: 4 filas (Fila 1: Logo + 4 items | Fila 2: 4 items | Fila 3: Login | Fila 4: Redes) */
    @media (max-width: 600px) {
        .header-grid {
            grid-template-areas:
                "logo nav1"
                "nav2 nav2"
                "login login"
                "socials socials";
            grid-template-columns: auto 1fr;
        }
        .social-icons {
            justify-content: flex-start;
        }
    }
</style>
