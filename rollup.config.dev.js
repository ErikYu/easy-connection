import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
  input: 'src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    sourcemap: true,
    name: 'EasyConnection',
    exports: 'named',
  },
  plugins: [
    css({ output: './dist/easy-connection.css' }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    commonjs({
      extensions
    }),
    serve(['']),
    livereload('dist'),
  ],
};
