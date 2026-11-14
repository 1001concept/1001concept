/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: '/', destination: '/vi', permanent: false }];
  },
};

export default nextConfig;
