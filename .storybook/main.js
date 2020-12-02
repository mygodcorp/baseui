const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const toPath = (_path) => path.join(process.cwd(), _path);

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components/*': resolve('../src/components/*')
    };
    console.log(config.resolve);
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        },
        plugins: [new TsconfigPathsPlugin({ silent: false })]
      }
    };
  }
};
