/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blog-website',
  assetPrefix: '/blog-website/',
  trailingSlash: true,
}

module.exports = nextConfig 