import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/index.ts'],
	external: [
    'atom',
  ],
	format: 'esm',
	minify: true,
	target: 'node14',
	treeshake: 'recommended',
  outDir: 'lib',
});
