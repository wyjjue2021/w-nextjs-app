/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-05 15:10:59
 * @FilePath: /个人工作/tf-next-app/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const path = require("path");
const withLess = require('next-with-less')
const nextConfig = withLess({
  reactStrictMode: false,
  swcMinify: true,
  lessLoaderOptions: {},
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // console.log(config.resolve.alias, "config");
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "./"),
    };
    return config;
  },
});

module.exports = nextConfig;
