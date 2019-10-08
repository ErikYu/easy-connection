import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import scss from 'rollup-plugin-scss';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
  input: 'src/index.ts',
  output: {
    file: './demo/lib/index.js',
    format: 'umd',
    sourcemap: true,
    name: 'EasyConnection',
    exports: 'named',
  },
  plugins: [
    scss({ output: './demo/lib/easy-connection.css' }),
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
