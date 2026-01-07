import type { Metadata } from 'next';
import { Cinzel, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { ThemeProvider } from '@/components/ThemeProvider';


const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'White Noroh Studio',
  description: 'Graphic Design Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <Header/>
      <body className={`${lato.className} antialiased transition-colors duration-300`}>
       
          {children}

      </body>
      <Footer/>
    </html>
  );
}