module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

        if (config.optimization.splitChunks.cacheGroups) {
            config.optimization.splitChunks.cacheGroups.noths = {
                name: 'noths',
                chunks: 'all',
                test: /[\\/]libs[\\/](api-client|shared-components)/,
                enforce: true
            };
        }

        return config;
    }

}

