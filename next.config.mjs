/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages deploys to a subdirectory based on repo name
  basePath: process.env.NODE_ENV === 'development' ? '' : '/marketing-site',
  // Ensure CSS is properly handled in static export
  assetPrefix: '/marketing-site',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  }
}

export default nextConfig
