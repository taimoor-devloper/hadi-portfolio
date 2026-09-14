/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Netlify's image optimizer (/_ipx) returns 502 for Next 13.4, which left every <Image> blank.
    // Project images are already pre-sized WebP files, so serve them directly.
    unoptimized: true,
  },
}

module.exports = nextConfig
