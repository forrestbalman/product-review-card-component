<script>
  import ProductImage from "$lib/components/ProductImage.svelte";
  import ProductPrice from "$lib/components/ProductPrice.svelte";
  import ProductButton from "$lib/components/ProductButton.svelte";

  let {
    category = "Perfume",
    name = "Gabrielle Essence Eau De Parfum",
    description = "A floral, solar, and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  } = $props();
</script>

<section class="card">
  <ProductImage />

  <div class="content">
    <h1 class="category">{category}</h1>

    <h2 class="name">{name}</h2>

    <p class="description">{description}</p>

    <ProductPrice />

    <ProductButton />
  </div>
</section>

<style>
  .card {
    max-width: 350px;
    width: 100%;
    border-radius: 1rem;
    background: var(--white);
    margin: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .card .content {
    padding: 1.5rem;
  }

  .card .content .category {
    font-family: var(--montserrat);
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--grey);
    margin: 0.5rem 0 1rem 0;
  }

  .card .content .name {
    font-family: var(--fraunces);
    font-weight: 700;
    font-size: 28px;
    color: var(--black);
    margin: 0rem 0 1rem 0;
  }

  .card .content .description {
    font-family: var(--montserrat);
    font-weight: 500;
    color: var(--grey);
    font-size: 14px;
    margin: 0 0 1rem 0;
    line-height: 1.75rem;
  }

  @media (min-width: 600px) {
    .card {
      flex-direction: row;
      max-width: 550px;
      height: 400px;
    }

    .card .content {
      width: 50%;
      padding: 2rem;
    }
  }
</style>
