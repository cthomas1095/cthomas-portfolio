@type {import('next').NextConfig}
import withTM from 'next-transpile-modules';

const nextConfig = {
  transpilePackages: ['three'],
  output: 'export',
};

export default withTM(['three'])(nextConfig);
