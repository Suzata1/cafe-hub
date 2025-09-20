'use client';

import { usePathname } from 'next/navigation'
 
export default function Items() {
  const pathname = usePathname()
  console.log (pathname)
  return <p>Post: {pathname}</p>
}