/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/institucional',
          destination: '/PageInstitucional',
        },
      ];
    },
  
};

export default nextConfig;
