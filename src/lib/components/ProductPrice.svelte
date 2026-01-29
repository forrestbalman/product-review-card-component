<script>
</script>

<div class="price-wrapper">
  <h3 class="sale-price">$149.99</h3>
  <p class="original-price">$169.99</p>
</div>

<style>
  .price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin: 0 0 1rem 0;
  }

  .price-wrapper .sale-price {
    font-family: var(--fraunces);
    font-weight: 700;
    font-size: 32px;
    color: var(--green-500);
    margin: 0;
  }

  .price-wrapper .original-price {
    font-family: var(--montserrat);
    font-weight: 500;
    font-size: 14px;
    color: var(--grey);
    text-decoration: line-through;
    margin: 0;
  }

  @media (max-width: 265px) {
    .price-wrapper {
      gap: 0.5rem;
    }
  }
</style>
