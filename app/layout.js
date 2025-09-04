import { Space_Grotesk } from "next/font/google";
import "./globals.css";



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick weights you need
  variable: "--font-space-grotesk", // CSS variable for Tailwind
});

export const metadata = {
  title: "Chi E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
