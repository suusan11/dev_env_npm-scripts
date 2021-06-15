const keepfolder = require('imagemin-keep-folder');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const gifsicle = require('imagemin-gifsicle');
const svgo = require('imagemin-svgo');

keepfolder(['src/img/**/*.{jpg,png,gif,svg}'], {
    plugins: [
        mozjpeg({
            quality: 80
        }),
        pngquant({
            quality: [ 0.65, 0.8 ], speed: 1 
        }),
        gifsicle(),
        svgo()
    ],
    replaceOutputDir: output => {
        return output.replace(/img\//, '../dist/img/')
    }
});