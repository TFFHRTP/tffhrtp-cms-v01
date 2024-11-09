/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.fhrp.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
