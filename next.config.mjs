/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // CORRECTED devIndicators configuration
  devIndicators: {
    autoPrerender: false,  // Only valid option to disable the "N" logo
  }
}

export default nextConfig;