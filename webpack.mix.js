const mix = require('laravel-mix');
// const path = require('path');

mix.config.uglify.compress.drop_console = false;
mix.config.postCss = require('./postcss.config').plugins;

mix
    .copy('src/index.html', 'dist/index.html')
    .copy('src/img/*', 'dist/assets/img/')
    .postCss('src/css/app.css', 'dist/assets/css/')
    .js('src/js/app.js', 'dist/assets/js/')
    // .webpackConfig({
    //     include: [
    //         path.resolve(__dirname, 'dist/assets/img'),
    //     ],
    //     test: /\.(gif|png|jpe?g|svg)$/i,
    //     use: [
    //         'file-loader',
    //         {
    //             loader: 'image-webpack-loader',
    //             options: {
    //                 mozjpeg: {
    //                     progressive: true,
    //                     quality: 65,
    //                 },
    //                 optipng: {
    //                     enabled: false,
    //                 },
    //                 pngquant: {
    //                     quality: '65-90',
    //                     speed: 4,
    //                 },
    //                 gifsicle: {
    //                     interlaced: false,
    //                 },
    //                 webp: {
    //                     quality: 75,
    //                 },
    //             },
    //         },
    //     ],
    // })
    .options({
        processCssUrls: false,
    })
    .setPublicPath('dist');

