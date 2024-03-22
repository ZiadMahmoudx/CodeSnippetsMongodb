import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code Snippets',
  description: 'Code Snippets'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white shadow-md">
            <Link href="/" passHref>
              <div className="flex items-center">
                <h1 className="text-xl font-bold">Code Snippets</h1>
                <FaCode className="ml-1 text-2xl " />
              </div>
            </Link>
          </nav>

          <div className="container mx-auto px-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
