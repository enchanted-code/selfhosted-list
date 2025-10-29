// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://sh-list.enchantedcode.co.uk/",
    base: "/",
    trailingSlash: "always",
    vite: {
        plugins: [tailwindcss()]
    }
});
