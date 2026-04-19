import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) { 
    const token=await getToken({
         req:request,
         secret:process.env.NEXTAUTH_SECRET
    }) 

  if(!token){
    return NextResponse.redirect(new URL('/login',request.url))
  } 
  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: '/private/:path*',
}