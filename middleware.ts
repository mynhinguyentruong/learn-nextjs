import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const authHeader = request.headers
}

export const config = {
  matcher: "/dashboard",
};
