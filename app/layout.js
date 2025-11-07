import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GearUp",
  description: "Find Your Favorite Vehicles",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>

        <main className="min-h-screen">{children}</main>
        <Toaster richColors />

        {/* <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>GearUp helps you find your dream car effortlessly. 
        Browse thousands of vehicles, compare prices, and book AI-assisted 
        test drives — all in one place.</p>
            </div>
          </footer> */}

          <footer className="bg-blue-50 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                  <img src="logo3.png" className="mb-5 w-32" alt="GearUp Logo" />
                  <p className="w-full md:w-2/3 text-gray-600">
                    GearUp helps you find your dream car effortlessly. Browse thousands of vehicles, compare prices, and book AI-assisted test drives — all in one place.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-medium mb-5">Get In Touch</p>
                  <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Kathmandu, Nepal</li>
                    <li>Phone: 01-00000000</li>
                    <li>Email: gearup@gmail.com</li>
                  </ul>
                </div>
              </div>

              <hr />
              <p className="py-5 text-sm text-center">
                Copyright 2025 © GearUp.com — All Rights Reserved
              </p>
            </div>
          </footer>

        
      </body>
    </html>
    </ClerkProvider>
  );
}
