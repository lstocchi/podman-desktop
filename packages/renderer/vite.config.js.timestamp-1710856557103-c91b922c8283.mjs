// packages/renderer/vite.config.js
import { join } from "path";
import * as path2 from "path";
import { svelte } from "file:///C:/Users/baldr/Work/github.com/containers/podman-desktop/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { defineConfig } from "file:///C:/Users/baldr/Work/github.com/containers/podman-desktop/node_modules/vite/dist/node/index.js";
import { fileURLToPath } from "url";

// vitest-shared-extensions.config.js
import path from "node:path";
function coverageConfig(packageRoot, packageName) {
  const obj = {
    coverage: {
      all: true,
      clean: true,
      src: [packageRoot],
      exclude: [
        "**/builtin/**",
        "**/cypress/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "**/*.{tsx,cjs,js,d.ts}",
        "**/*-info.ts",
        "**/.{cache,git,idea,output,temp,cdix}/**",
        "**/*{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tailwind,postcss}.config.*"
      ],
      provider: "v8",
      reportsDirectory: path.join(packageRoot, "../../", `test-resources/coverage/${packageName}`),
      reporter: ["lcov", "text"]
    }
  };
  return obj;
}

// packages/renderer/vite.config.js
var __vite_injected_original_import_meta_url = "file:///C:/Users/baldr/Work/github.com/containers/podman-desktop/packages/renderer/vite.config.js";
var filename = fileURLToPath(__vite_injected_original_import_meta_url);
var PACKAGE_ROOT = path2.dirname(filename);
var PACKAGE_NAME = "renderer";
var vite_config_default = defineConfig({
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/"
    }
  },
  plugins: [svelte({ hot: !process.env.VITEST })],
  optimizeDeps: {
    exclude: ["tinro"]
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    alias: [
      // https://github.com/vitest-dev/vitest/issues/2834
      { find: /^svelte$/, replacement: "svelte/internal" }
    ],
    deps: {
      inline: [
        "moment"
      ]
    },
    ...coverageConfig(PACKAGE_ROOT, PACKAGE_NAME)
  },
  base: "",
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    sourcemap: true,
    outDir: "dist",
    assetsDir: ".",
    emptyOutDir: true,
    reportCompressedSize: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvcmVuZGVyZXIvdml0ZS5jb25maWcuanMiLCAidml0ZXN0LXNoYXJlZC1leHRlbnNpb25zLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJhbGRyXFxcXFdvcmtcXFxcZ2l0aHViLmNvbVxcXFxjb250YWluZXJzXFxcXHBvZG1hbi1kZXNrdG9wXFxcXHBhY2thZ2VzXFxcXHJlbmRlcmVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxiYWxkclxcXFxXb3JrXFxcXGdpdGh1Yi5jb21cXFxcY29udGFpbmVyc1xcXFxwb2RtYW4tZGVza3RvcFxcXFxwYWNrYWdlc1xcXFxyZW5kZXJlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYmFsZHIvV29yay9naXRodWIuY29tL2NvbnRhaW5lcnMvcG9kbWFuLWRlc2t0b3AvcGFja2FnZXMvcmVuZGVyZXIvdml0ZS5jb25maWcuanNcIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgUmVkIEhhdCwgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKiBlc2xpbnQtZW52IG5vZGUgKi9cclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tICdAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5pbXBvcnQgeyBjb3ZlcmFnZUNvbmZpZyB9IGZyb20gJy4uLy4uL3ZpdGVzdC1zaGFyZWQtZXh0ZW5zaW9ucy5jb25maWcnO1xyXG5cclxubGV0IGZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBQQUNLQUdFX1JPT1QgPSBwYXRoLmRpcm5hbWUoZmlsZW5hbWUpO1xyXG5jb25zdCBQQUNLQUdFX05BTUUgPSAncmVuZGVyZXInO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBtb2RlOiBwcm9jZXNzLmVudi5NT0RFLFxyXG4gIHJvb3Q6IFBBQ0tBR0VfUk9PVCxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnL0AvJzogam9pbihQQUNLQUdFX1JPT1QsICdzcmMnKSArICcvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbc3ZlbHRlKHsgaG90OiAhcHJvY2Vzcy5lbnYuVklURVNUIH0pXSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGV4Y2x1ZGU6IFsndGlucm8nXSxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgYWxpYXM6IFtcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0L2lzc3Vlcy8yODM0XHJcbiAgICAgIHsgZmluZDogL15zdmVsdGUkLywgcmVwbGFjZW1lbnQ6ICdzdmVsdGUvaW50ZXJuYWwnIH0sXHJcbiAgICBdLFxyXG4gICAgZGVwczoge1xyXG4gICAgICBpbmxpbmU6IFtcclxuICAgICAgICAnbW9tZW50JyxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICAgIC4uLmNvdmVyYWdlQ29uZmlnKFBBQ0tBR0VfUk9PVCwgUEFDS0FHRV9OQU1FKSxcclxuICB9LFxyXG4gIGJhc2U6ICcnLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgZnM6IHtcclxuICAgICAgc3RyaWN0OiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgIGFzc2V0c0RpcjogJy4nLFxyXG5cclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJhbGRyXFxcXFdvcmtcXFxcZ2l0aHViLmNvbVxcXFxjb250YWluZXJzXFxcXHBvZG1hbi1kZXNrdG9wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxiYWxkclxcXFxXb3JrXFxcXGdpdGh1Yi5jb21cXFxcY29udGFpbmVyc1xcXFxwb2RtYW4tZGVza3RvcFxcXFx2aXRlc3Qtc2hhcmVkLWV4dGVuc2lvbnMuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9iYWxkci9Xb3JrL2dpdGh1Yi5jb20vY29udGFpbmVycy9wb2RtYW4tZGVza3RvcC92aXRlc3Qtc2hhcmVkLWV4dGVuc2lvbnMuY29uZmlnLmpzXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ29weXJpZ2h0IChDKSAyMDIzIFJlZCBIYXQsIEluYy5cclxuICogXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqIFxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICogXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IHByb2plY3QgY29kZSBjb3ZlcmFnZSBjb25maWd1cmF0aW9uIGZvciB2aXRlc3RcclxuICogQHBhcmFtIHsqfSBwYWNrYWdlUm9vdCByb290IG9mIHRoZSBwcm9qZWN0IHdoZXJlIGNvdmVyYWdlIGlzIGJlaW5nIGNhbGN1bGF0ZWRcclxuICogQHBhcmFtIHsqfSBwYWNrYWdlTmFtZSBwYWNrYWdlIG5hbWUgdG8gYXBwZWFyIGluIHRlc3QtcmVzb3VyY2VzL2NvdmVyYWdlIGluIHByb2plY3Qgcm9vdCBmb2xkZXJcclxuICogQHJldHVybnMgb2JqZWN0IGZvciBjb2RlIGNvdmVyYWdlIGNvbmZpZ3VyYXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3ZlcmFnZUNvbmZpZyhwYWNrYWdlUm9vdCwgcGFja2FnZU5hbWUpIHtcclxuICBjb25zdCBvYmogPSB7IGNvdmVyYWdlOiB7XHJcbiAgICAgIGFsbDogdHJ1ZSxcclxuICAgICAgY2xlYW46IHRydWUsXHJcbiAgICAgIHNyYzogW3BhY2thZ2VSb290XSxcclxuICAgICAgZXhjbHVkZTogW1xyXG4gICAgICAgICcqKi9idWlsdGluLyoqJyxcclxuICAgICAgICAnKiovY3lwcmVzcy8qKicsXHJcbiAgICAgICAgJyoqL2Rpc3QvKionLFxyXG4gICAgICAgICcqKi9ub2RlX21vZHVsZXMvKionLFxyXG4gICAgICAgICcqKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nLFxyXG4gICAgICAgICcqKi8qLnt0c3gsY2pzLGpzLGQudHN9JyxcclxuICAgICAgICAnKiovKi1pbmZvLnRzJyxcclxuICAgICAgICAnKiovLntjYWNoZSxnaXQsaWRlYSxvdXRwdXQsdGVtcCxjZGl4fS8qKicsXHJcbiAgICAgICAgJyoqLyp7a2FybWEscm9sbHVwLHdlYnBhY2ssdml0ZSx2aXRlc3QsamVzdCxhdmEsYmFiZWwsbnljLGN5cHJlc3MsdGFpbHdpbmQscG9zdGNzc30uY29uZmlnLionLFxyXG4gICAgICBdLFxyXG4gICAgICBwcm92aWRlcjogJ3Y4JyxcclxuICAgICAgcmVwb3J0c0RpcmVjdG9yeTogcGF0aC5qb2luKHBhY2thZ2VSb290LCAnLi4vLi4vJywgYHRlc3QtcmVzb3VyY2VzL2NvdmVyYWdlLyR7cGFja2FnZU5hbWV9YCksXHJcbiAgICAgIHJlcG9ydGVyOiBbJ2xjb3YnLCAndGV4dCddLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Q29uZmlnKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBleGNsdWRlOiBbXHJcbiAgICAgICcqKi9idWlsdGluLyoqJyxcclxuICAgICAgJyoqL25vZGVfbW9kdWxlcy8qKicsXHJcbiAgICAgICcqKi9kaXN0LyoqJyxcclxuICAgICAgJyoqLy57aWRlYSxnaXQsY2FjaGUsb3V0cHV0LHRlbXAsY2RpeH0vKionLFxyXG4gICAgICAnKiovey5lbGVjdHJvbi1idWlsZGVyLGJhYmVsLGNoYW5nZWxvZyxkb2N1c2F1cnVzLGplc3QscG9zdGNzcyxwcmV0dGllcixyb2xsdXAsc3ZlbHRlLHRhaWx3aW5kLHZpdGUsdml0ZXN0Kix3ZWJwYWNrfS5jb25maWcuKicsXHJcbiAgICBdLFxyXG4gIH07XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQW1CQSxTQUFTLFlBQVk7QUFDckIsWUFBWUEsV0FBVTtBQUN0QixTQUFTLGNBQWM7QUFDdkIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxxQkFBcUI7OztBQ0w5QixPQUFPLFVBQVU7QUFRVixTQUFTLGVBQWUsYUFBYSxhQUFhO0FBQ3ZELFFBQU0sTUFBTTtBQUFBLElBQUUsVUFBVTtBQUFBLE1BQ3BCLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLEtBQUssQ0FBQyxXQUFXO0FBQUEsTUFDakIsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLGtCQUFrQixLQUFLLEtBQUssYUFBYSxVQUFVLDJCQUEyQixXQUFXLEVBQUU7QUFBQSxNQUMzRixVQUFVLENBQUMsUUFBUSxNQUFNO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUOzs7QURoRDZRLElBQU0sMkNBQTJDO0FBMEI5VCxJQUFJLFdBQVcsY0FBYyx3Q0FBZTtBQUM1QyxJQUFNLGVBQW9CLGNBQVEsUUFBUTtBQUMxQyxJQUFNLGVBQWU7QUFHckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxPQUFPLEtBQUssY0FBYyxLQUFLLElBQUk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQzlDLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxPQUFPO0FBQUEsRUFDbkI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxzREFBc0Q7QUFBQSxJQUNoRSxTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUE7QUFBQSxNQUVMLEVBQUUsTUFBTSxZQUFZLGFBQWEsa0JBQWtCO0FBQUEsSUFDckQ7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNFLEdBQUcsZUFBZSxjQUFjLFlBQVk7QUFBQSxFQUNoRDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFFWCxhQUFhO0FBQUEsSUFDYixzQkFBc0I7QUFBQSxFQUN4QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
