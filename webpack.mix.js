const mix = require('laravel-mix');

const VeutifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const webpackConfig = {
	plugins: [
		new CaseSensitivePathsPlugin(),
		new VeutifyLoaderPlugin()
	]
	// other webpack config ...
}

mix.webpackConfig(webpackConfig);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.sass('resources/sass/quotations/default.scss', 'public/css/quotations')
	.sass('resources/sass/purchase-orders/default.scss', 'public/css/purchase-orders')
	.sass('resources/sass/purchase-orders/new.scss', 'public/css/purchase-orders')
	.sass('resources/sass/invoices/default.scss', 'public/css/invoices')
	.sass('resources/sass/reports/daily.scss', 'public/css/daily.css')
	.sass('resources/sass/reports/weekly.scss', 'public/css/daily.css')
	.sass('resources/sass/reports/monthly.scss', 'public/css/daily.css');
