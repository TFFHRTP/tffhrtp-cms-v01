import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from './components/navbar';
import { BlogInfo, PageWithSlugAndTitle } from './lib/types';

const inter = Inter({ subsets: ['latin'] })
const wordpressUrl = process.env.WORDPRESS_URL;

export const metadata: Metadata = {
  title: 'The Foundation for Human Rights through Photography',
  description: 'Advocate. Document. Promote. | Human Rights.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const response = await fetch(`${wordpressUrl}/wp-json`);
  const blogInfo : BlogInfo = await response.json();

  const response2 = await fetch(`${wordpressUrl}/wp-json/wp/v2/pages?_fields[]=title&_fields[]=slug`);
  const pages : PageWithSlugAndTitle[] = await response2.json();

  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <NavBar pages={pages} blogInfo={blogInfo} />
        <main className='container mx-auto px-4 pt-24 pb-12 flex-grow'>
          {children}
        </main>
        <footer className="bg-indigo-950 text-white p-4 text-sm min-h-full h-32 flex items-center justify-center">
          {/* Footer content goes here */}
          <div>
            The Foundation for Human Rights through Photography &copy; 2023-{new Date().getFullYear()} is licensed under CC BY-SA 4.0 
          </div>
        </footer>
      </body>
    </html>
  )
}
