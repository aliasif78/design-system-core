// Next JS
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// Providers
import Providers from './providers';

// Styles
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Design System Core',
  description: 'A collection of reusable components and styles for building consistent and scalable user interfaces.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script src="cdn.lordicon.com" async></script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
