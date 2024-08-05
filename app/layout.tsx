import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { ThemeProvider } from './provider';

export const metadata: Metadata = {
  title: 'Phong Duong Portfolio',
  description: 'Get to know Phong Duong',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
