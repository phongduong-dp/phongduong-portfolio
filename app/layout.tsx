import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
