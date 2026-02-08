/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/press-kit', // Nome exato do seu repositório
  images: {
    unoptimized: true,
  },
};

export default nextConfig;