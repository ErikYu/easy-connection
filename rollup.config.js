import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
    input: 'src/index.ts',
    output: {
        file: './dist/index.js',
        format: 'umd',
        sourcemap: false,
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
        uglify(),
    ],
};
