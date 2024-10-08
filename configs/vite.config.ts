import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import pkg from "../packages/core/package.json";

export default defineConfig({
  plugins: [
    solidPlugin({ ssr: true }),
    dts({
      tsConfigFilePath: "tsconfig.build.json",
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],

  build: {
    minify: true,
    reportCompressedSize: true,
    ssr: true,
    lib: {
      entry: "src/index.tsx",
      formats: ["es", "cjs"],
      fileName: format => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});

// export default defineConfig({
//   plugins: [solidPlugin()],
//   build: {
//     target: "esnext",

//   },
// });