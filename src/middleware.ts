import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import geoip from 'geoip-lite';
import requestIp from 'request-ip'
export default async function middleware(req: any) {
  //const country = req.geo?.country || req.headers.get('x-vercel-ip-country') || 'VI'
  const country = req.geo?.country || req.headers.get('x-vercel-ip-country')
  const forwarded = req.headers.get('x-forwarded-for');
  const detectedIp = requestIp.getClientIp(req)
  //const ip = req.headers['x-forwarded-for'] ;
  //const geo = geoip.lookup(ip);
//const x=ip+"k"+geo.co;
 // if (geo && geo.country === 'VN') 
    


    return NextResponse.redirect(new URL(`${country}`, req.url))
   
  
  // if (['VI', 'VN', 'vi', 'vn'].includes(country ?? '')) {
  //   return NextResponse.redirect(new URL(`${country}`, req.url))
  // }
  //return NextResponse.redirect(new URL(`${country}`, req.url))
}

export const config = {
  matcher: ['/home', '/:path'],
};