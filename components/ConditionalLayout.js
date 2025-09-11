'use client';
import { usePathname } from 'next/navigation';
import Navbar from "./navbar";
import Footer from "./footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  const showNavbar = !pathname.includes('/admin') && 
                     !pathname.includes('/login') && 
                     !pathname.includes('/cart') && 
                     !pathname.includes('/checkout') && 
                     !pathname.includes('/payment') && 
                     !pathname.includes('/signup');

  const showFooter = !pathname.includes('/admin') && 
                     !pathname.includes('/login') && 
                     !pathname.includes('/signup');

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
