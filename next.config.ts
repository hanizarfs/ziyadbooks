import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.ziyadbooks.net",
            },
        ],
    },
};

export default nextConfig;
