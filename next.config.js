/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.ziyadbooks.net",
            },
            {
                protocol: "https",
                hostname: "ziyadbooks.com",
            },
        ],
    },
};

module.exports = nextConfig;
