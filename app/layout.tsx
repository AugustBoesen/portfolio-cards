'use client';

import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';
import { createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'] });

interface StateContextValue {
  pageValue: string;
  setValue: (newValue: string) => void;
}

export const currentPage = createContext<StateContextValue>({
  pageValue: 'Default',
  setValue: (newValue: string) => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [value, setValue] = useState('');
  return (
    <currentPage.Provider value={{ pageValue: value, setValue: setValue }}>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="keywords"
            content="Severi Boesen, Portfolio, coding, music production, event production"
          />
          <meta
            name="description"
            content="A portfolio website by Severi Boesen"
          />
          <meta name="author" content="Severi Boesen" />

          <title>Severi Boesen - Portfolio</title>
        </head>
        <body className={montserrat.className}>
          <Header />
          <AnimatePresence mode="sync">{children}</AnimatePresence>
          <Footer />
        </body>
      </html>
    </currentPage.Provider>
  );
}
