'use client';

import { SpeedInsights } from "@vercel/speed-insights/next"
import React, { ReactNode, useState } from 'react';
import AppWrappers from './AppWrappers';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Footer from 'components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
        rel="shortcut icon"
        type="image/x-icon"
        href={process.env.NEXT_PUBLIC_BASE_PATH || '' + '/favicon.ico'}
      /> */}

        <title>CloudSage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body id={'root'}>
        <AppWrappers>
          <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
            <Sidebar open={open} setOpen={setOpen} variant="admin" />
            {/* Navbar & Main Content */}
            <SpeedInsights/>
            <div className="h-full w-full font-dm dark:bg-background-900">
              {/* Main Content */}
              <main
                className={`mx-2.5  flex-none transition-all dark:bg-background-900 
              md:pr-2 xl:ml-[323px]`}
              >
                {/* Routes */}
                <div>
                  <Navbar
                    onOpenSidenav={() => setOpen(!open)}
                    brandText={'Dashboard'}
                  />
                  <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
                    {children}
                  </div>
                  <div className="p-3">
                    <Footer />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </AppWrappers>
      </body>
    </html>
  );
}
