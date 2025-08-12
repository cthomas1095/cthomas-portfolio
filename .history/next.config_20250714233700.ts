import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
};

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

export default nextConfig;
