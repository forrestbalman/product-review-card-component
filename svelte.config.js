import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    paths: {
      // IMPORTANT: this is the GitHub Pages base path
      base:
        process.env.NODE_ENV === "production"
          ? "/product-review-card-component"
          : "",
    },
  },
};
