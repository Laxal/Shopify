import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

esbuild
	.build({
		entryPoints: ['src/index.js', 'src/index.scss'],
		outdir: 'assets',
		target: 'es2017',
		watch: IS_DEVELOPMENT,
		sourcemap: IS_DEVELOPMENT,
		bundle: true,
		minify: true,
		plugins: [
			sassPlugin({
				async transform(source) {
					const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
					return css;
				},
			}),
		],
	})
	.then(() => console.log('BUILD COMPLETE!!!'));
