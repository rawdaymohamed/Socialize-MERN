import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Socialize MERN",
  description: "Social Media app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='w-full'>
          <Navbar />
        </div>
        <div className='w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-50'>
          {children}
        </div>
      </body>
    </html>
  );
}
