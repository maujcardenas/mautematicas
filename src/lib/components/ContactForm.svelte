<form>
    <input type="text" placeholder="Nombre completo" required />
    <input type="email" placeholder="Correo electrónico" required />
    <textarea placeholder="Mensaje" rows="3" required></textarea>
    <button type="submit">Enviar</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #ffffff;
        padding: 1rem;
        border: 1px solid #888888;
        border-radius: 4px;
    }
    input,
    textarea {
        padding: 0.5rem;
        border: 1px solid #888888;
        border-radius: 2px;
        font-family: inherit;
        color: #111111;
        background-color: #f5f5f5;
    }
    button {
        padding: 0.5rem;
        background-color: #0055aa;
        color: #ffffff;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        font-weight: bold;
    }
</style>
