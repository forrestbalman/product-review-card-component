<script>
  import { base } from "$app/paths";
</script>

<button class="add-to-cart">
  <img src="{base}/images/icon-cart.svg" alt="Cart icon" />
  <span>Add to Cart</span>
</button>

<style>
  .add-to-cart {
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

  .add-to-cart:hover {
    background-color: var(--green-700);
  }

  .add-to-cart span {
    font-family: var(--montserrat);
    font-weight: 700;
    font-size: 14px;
    color: var(--white);
    letter-spacing: 0.075rem;
  }
</style>
