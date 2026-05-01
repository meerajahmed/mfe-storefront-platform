import type { NextConfig } from "next";
import { withMicrofrontends } from "@vercel/microfrontends/next/config";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/documentation",
      destination: "/docs",
      permanent: true,
    },
  ],
};
 

export default withMicrofrontends(nextConfig);
