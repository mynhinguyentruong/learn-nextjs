import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";

export async function middleware(request: NextRequest) {
  console.log("middle ware run");
  // check if the user is authenticated
  const token = request.headers.get('cookie')?.split('token=')[1]
  if (!token) return NextResponse.redirect(new URL('/login', request.url))
  // redirect if not authorized
  NextResponse.next()
}

export const config = {
  matcher: "/dashboard",
};
