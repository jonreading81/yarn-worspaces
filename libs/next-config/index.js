
const withTM = require('next-transpile-modules')(['@noths/shared-components', '@noths/next']);

module.exports = withTM({
    webpack: (config, options) => {
        if (config.optimization.splitChunks.cacheGroups) {
            config.optimization.splitChunks.cacheGroups.noths = {
                name: 'noths',
                chunks: 'all',
                test: /[\\/]@noths[\\/](shared-components|next)/,
                enforce: true
            };
        }
        return config;
    },
    generateBuildId: async () => {
        return 'SHARED_BUILD_ID';
    },

});