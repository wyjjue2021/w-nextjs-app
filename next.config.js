/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-19 19:30:19
 * @FilePath: /个人工作/tf-next-app/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const path = require("path");
const withLess = require('next-with-less')
const withTM = require('next-transpile-modules')([
  'react-cookies'
]);

// const loadEnvConfig = require('./bin/env');

// loadEnvConfig();

const nextConfig = withTM(withLess({
  reactStrictMode: false,
  swcMinify: true,
  lessLoaderOptions: {},
  distDir: "dist",
  env:null,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // console.log(config.resolve.alias, "config");
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "./"),
    };
    config.module.rules.push({
			test: /\.md$/,
			use: 'frontmatter-markdown-loader',
		});
    // config.plugins.push(
		// 	new webpack.EnvironmentPlugin({
		// 		NODE_ENV: process.env.NODE_ENV,
		// 	}),
		// );
    return config;
  },
}));

module.exports = nextConfig;
