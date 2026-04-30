import type { NextConfig } from "next";
import { withMicrofrontends } from "@vercel/microfrontends/next/config";


const nextConfig: NextConfig = {
  basePath: "/docs",
};

export default withMicrofrontends(nextConfig);

