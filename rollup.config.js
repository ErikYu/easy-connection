import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss';

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
        scss({ output: './dist/easy-connection.css' }),
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
