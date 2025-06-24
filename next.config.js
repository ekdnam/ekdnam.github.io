/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blog-website',
  assetPrefix: '/blog-website/',
  trailingSlash: true,
  // Skip the OG route during static export
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  distDir: '.next',
}

module.exports = nextConfig 