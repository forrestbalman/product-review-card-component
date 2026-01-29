<script>
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  {@render children()}
</main>

<style>
  :global(:root) {
    --green-500: hsl(158, 36%, 37%);
    --green-700: hsl(158, 42%, 18%);
    --black: hsl(212, 21%, 14%);
    --cream: hsl(30, 38%, 92%);
    --grey: hsl(228, 12%, 48%);
    --white: hsl(0, 0%, 100%);
    --montserrat: "Montserrat", sans-serif;
    --fraunces: "Fraunces", serif;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    background-color: var(--cream);
    font-size: 14px;
  }

  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
