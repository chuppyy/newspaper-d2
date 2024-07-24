import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  const country = req.geo?.country || ''
  console.log("country", country)
  if (['VI', 'VN', 'vi', 'vn'].includes(country)) {
    return NextResponse.redirect(new URL('/not-found', req.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/:path'],
};