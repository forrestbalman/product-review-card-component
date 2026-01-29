<script>
  import { base } from "$app/paths";
</script>

<div class="image-wrapper">
  <img
    src="{base}/images/image-product-desktop.jpg"
    alt="A bottle of perfume"
  />
</div>

<style>
  .image-wrapper {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 40%;
  }

  @media (min-width: 600px) {
    .image-wrapper {
      width: 50%;
      height: 100%;
    }
  }
</style>
