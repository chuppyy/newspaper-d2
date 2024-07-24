import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import geoip from 'geoip-lite';

export default async function middleware(req: NextRequest) {
  //const country = req.geo?.country || req.headers.get('x-vercel-ip-country') || 'VI'
  const ip = req.headers.get('x-forwarded-for');
  const country = geoip.lookup(ip);
  console.log("country", country)
  if (['VI', 'VN', 'vi', 'vn'].includes(country)) {
    return NextResponse.redirect(new URL(`${country}`, req.url))
  }
  return NextResponse.redirect(new URL(`${country}`, req.url))
}

export const config = {
  matcher: ['/home', '/:path'],
};