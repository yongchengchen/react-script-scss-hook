var fs = require("fs");
var execSync = require('child_process').execSync;
var stand = require('./stand.js');

console.log(stand.COLORS.FgMagenta, 'Please make sure these modules have been installed:');
console.log(stand.COLORS.FgMagenta, 'sass-loader, node-sass, style-loader, css-loader');

var configPath = stand.root + '/node_modules/react-scripts/config';
var rawDevConfigWebpack = configPath + '/webpack.config.dev.raw.js';
var myDevConfigWebpack = configPath + '/webpack.config.dev.js';
var hackedConfigWebpack = stand.root + '/hooks/res/webpack.config.dev.js';

if (!fs.existsSync(rawDevConfigWebpack)) {
    execSync('mv ' + myDevConfigWebpack + ' ' + rawDevConfigWebpack);
    execSync('cp -a ' + hackedConfigWebpack + ' ' + myDevConfigWebpack);
}

rawDevConfigWebpack = configPath + '/webpack.config.prod.raw.js';
myDevConfigWebpack = configPath + '/webpack.config.prod.js';
hackedConfigWebpack = stand.root + '/hooks/res/webpack.config.prod.js';
if (!fs.existsSync(rawDevConfigWebpack)) {
    execSync('mv ' + myDevConfigWebpack + ' ' + rawDevConfigWebpack);
    execSync('cp -a ' + hackedConfigWebpack + ' ' + myDevConfigWebpack);
}


var postcssConfigfileRes = stand.root + '/hooks/res/postcss.config.js';
var postcssConfigfile = stand.root + '/postcss.config.js';
execSync('cp -a ' + postcssConfigfileRes + ' ' + postcssConfigfile);
