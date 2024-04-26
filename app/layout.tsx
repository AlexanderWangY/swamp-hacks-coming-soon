import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';

const RalewayRegular = Raleway({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '700', '800', '900'],
});

const PoppinsFont = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'SwampHacks X',
  description: "SwampHacks X's website and login portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={PoppinsFont.className}>{children}</body>
    </html>
  );
}
