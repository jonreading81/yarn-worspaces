
const withTM = require('next-transpile-modules')(['@noths/shared-components']);

module.exports = withTM({
    webpack: (config, options) => {
        if (config.optimization.splitChunks.cacheGroups) {
            config.optimization.splitChunks.cacheGroups.noths = {
                name: 'noths',
                chunks: 'all',
                test: /[\\/]@noths[\\/](api-client|shared-components)/,
                enforce: true
            };
        }
        return config;
    }

});



