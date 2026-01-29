<script>
  import ProductReviewCard from "$lib/components/ProductReviewCard.svelte";
</script>

<ProductReviewCard />

<style>
  .card .content .add-to-cart {
    width: 100%;
    background-color: var(--green-500);
    border: none;
    border-radius: 0.75rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }

  .card .content .add-to-cart:hover {
    background-color: var(--green-700);
  }

  .card .content .add-to-cart span {
    font-family: var(--montserrat);
    font-weight: 700;
    font-size: 14px;
    color: var(--white);
    letter-spacing: 0.075rem;
  }
</style>
