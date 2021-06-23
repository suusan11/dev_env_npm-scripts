import resolve  from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel    from 'rollup-plugin-babel';

export default {
    input: 'script.js',
    output: {
        format: 'iife',
        dir: 'dist/js'
    },
    plugins: [
        resolve({ mainFields: ['module', 'main'], }),
        commonjs(),
        babel({
            presets: [
                [
                    "@babel/preset-env", {
                    "modules": false,
                    "targets": {
                        "browsers": ['last 2 versions']
                    }
                }
                ]
            ],
            babelrc: false
        })
    ]
};