// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';


import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kavita Kapkoti | Final year student From Uttarakhand, India.',
  description:
    'A developer who specializes in full stack development (React.js & Node.js), from Uttarakhand, India.',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/icon0.svg',
    apple: '/favicon/apple-icon.png',
  },
  manifest: '/favicon/manifest.json',
    keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
  ],
  creator: 'Kavita Kapkoti',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

