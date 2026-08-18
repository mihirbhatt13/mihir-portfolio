import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mihir Bhatt | Software Developer Portfolio',
  description: 'Portfolio of Mihir Bhatt - Software Developer @vidyarthiMitra.org. Specialized in Web Development, Python, SQL, Next.js, and Backend Systems.',
  keywords: ['Mihir Bhatt', 'Software Developer', 'Vidhyarthi Mitra', 'Web Development', 'Python', 'SQL', 'Next.js', 'PostgreSQL', 'Mumbai'],
  authors: [{ name: 'Mihir Bhatt' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-950 text-gray-100 antialiased min-h-screen flex flex-col selection:bg-electric-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
