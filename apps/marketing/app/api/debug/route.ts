import { headers } from "next/headers";
 
export async function GET() {
  const headersList = await headers();
 
  const debugInfo = {
    app: "marketing",
    timestamp: new Date().toISOString(),
    headers: {
      "x-vercel-mfe-app": headersList.get("x-vercel-mfe-app"),
      "x-vercel-mfe-matched-path": headersList.get("x-vercel-mfe-matched-path"),
      "x-vercel-deployment-id": headersList.get("x-vercel-deployment-id"),
    },
  };
 
  return Response.json(debugInfo);
}