import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // Vitest won't work with Remix (ref https://remix.run/docs/en/main/future/vite#plugin-usage-with-other-vite-based-tools-eg-vitest-storybook)
  plugins: [!process.env.VITEST && remix(), tsconfigPaths(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./app/setupTest.ts'],
    include: ['./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watchExclude: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
  },
});
