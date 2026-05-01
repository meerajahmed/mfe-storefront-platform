import type { NextRequest } from "next/server";
 
export interface AuthToken {
  userId: string;
  email: string;
  exp: number;
}
 
export function getAuthToken(request: NextRequest): string | undefined {
  return request.cookies.get("auth-token")?.value;
}
 
export function isAuthenticated(request: NextRequest): boolean {
  const token = getAuthToken(request);
  if (!token) return false;
  // In a real app, verify the JWT here
  return true;
}
 
export function decodeToken(token: string): AuthToken | null {
  try {
    // In a real app, use a proper JWT library
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload as AuthToken;
  } catch {
    return null;
  }
}