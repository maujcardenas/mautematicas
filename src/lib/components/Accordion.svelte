<script>
    export let question;
    export let answer;
</script>

<details>
    <summary>{question}</summary>
    <p>{answer}</p>
</details>

<style>
    details {
        border: 1px solid #888888;
        border-radius: 3px;
        margin-bottom: 0.25rem;
        background-color: #f5f5f5;
    }
    summary {
        padding: 0.5rem;
        cursor: pointer;
        font-weight: 500;
        color: #111111;
        list-style: none; /* Oculta la flecha por defecto en algunos navegadores */
    }
    summary::-webkit-details-marker {
        display: none;
    }
    p {
        padding: 0 0.5rem 0.5rem;
        margin: 0;
        font-size: 0.85rem;
        color: #111111;
    }
</style>
