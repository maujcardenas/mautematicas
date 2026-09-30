<script>
    // Sintaxis moderna de Svelte 5
    let { articles = [] } = $props();
</script>

<section id="servicios">
    <h2>Listado de Servicios y Precios</h2>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Categoría</th>
                    <th>CTA</th>
                </tr>
            </thead>
            <tbody>
                {#each articles as s}
                    <tr>
                        <td class="font-medium">{s.title}</td>
                        <td><span class="badge">{s.category}</span></td>
                        <td class="leer-mas-td">Leer mas</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<style>
    /* Estilos generales y Tabla (Modo claro/neutro para legibilidad) */
    #servicios h2 {
        color: #1e293b;
        margin-bottom: 1.5rem;
    }

    .table-responsive {
        overflow-x: auto;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        margin-bottom: 3rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #ffffff;
        color: #334155;
    }

    th,
    td {
        border-bottom: 1px solid #e2e8f0;
        padding: 1rem;
        text-align: left;
    }

    th {
        background-color: #f8fafc;
        color: #0f172a;
        font-weight: 600;
    }

    .font-medium {
        font-weight: 500;
        color: #0f172a;
    }

    .leer-mas-td {
        font-weight: 600;
        color: #0284c7;
    }

    .badge {
        background-color: #e0f2fe;
        color: #0369a1;
        padding: 0.25rem 0.6rem;
        border-radius: 9999px;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
</style>
