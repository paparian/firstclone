import webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';

module.exports = (env) => {
  const envConfig = !env.mode
    ? require('./webpack-build-utils/webpack.development')
    : require(`./webpack-build-utils/webpack.${env.mode}`);
  return webpackMerge(
    {
      mode: env.node,
    },
    commonConfig,
    envConfig,
  );
};
