const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        //
    ],
    managerWebpack: async (config, options) => {
        return config
    },
    managerBabel: async (config, options) => {
        return config
    },
    webpackFinal: async (config, options) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        })

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
        }
        config.resolve.extensions.push('.scss')

        return config
    },
    babel: async (config, options) => {
        return config
    },
}
