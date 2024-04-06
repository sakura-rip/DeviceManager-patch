// noinspection ES6PreferShortImport
import { themeColor } from "./src/lib/style/theme.server";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const isTauri = "TAURI_FAMILY" in process.env;
console.info(isTauri ? "Building for Tauri" : "Building for PWA");
const { homepage, bugs, repository } = JSON.parse(
  await readFile(
    fileURLToPath(new URL("package.json", import.meta.url)),
    "utf8",
  ),
);

process.env["VITE_HOMEPAGE_URL"] = repository.url.replace(/\.git$/, "");
process.env["VITE_DOCS_URL"] = homepage;
process.env["VITE_BUGS_URL"] = bugs.url;
process.env["VITE_LEARN_URL"] = "https://www.iq-eq.io/";
process.env["VITE_LATEST_FIRMWARE"] = "1.1.3";

export default defineConfig({
  build: {
    // we rely on the serial api, so just chrome is fine
    target: ["chrome114", "safari16"],
    sourcemap: true,
    rollupOptions: {
      external: isTauri ? [/virtual:pwa.*/] : [],
    },
  },
  envPrefix: ["TAURI_", "VITE_"],
  plugins: [
    ViteYaml(),
    sveltekit(),
    ...(isTauri
      ? []
      : [
          SvelteKitPWA({
            kit: {
              trailingSlash: "always",
            },
            scope: "/",
            base: "/",
            includeAssets: ["favicon.png"],
            workbox: {
              // https://vite-pwa-org.netlify.app/frameworks/sveltekit.html#globpatterns
              globPatterns: [
                "client/**/*.{js,map,css,woff2,csv,png,svg}",
                "prerendered/**/*.html",
              ],
            },
            manifest: {
              name: "CharaChorder Device Manager",
              id: "charchorder-device-manager",
              theme_color: themeColor,
              icons: [
                {
                  src: "icon.svg",
                  sizes: "144x144",
                  type: "image/svg+xml",
                },
              ],
            },
          }),
        ]),
  ],
});
