import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Angel Amaya Balion — Student Software Developer',
  description:
    'Personal portfolio of Angel Amaya Balion, a fourth-year Information Technology student at De La Salle Lipa. Building web applications, backend systems, and mobile apps.',
  keywords: [
    'Angel Amaya Balion',
    'Amaya Balion',
    'Student Software Developer',
    'De La Salle Lipa',
    'Web Development',
    'Backend Development',
    'Mobile Development',
    'Java Spring Boot',
    'PostgreSQL',
    'TypeScript',
    'Next.js',
    'Flutter',
  ],
  authors: [{ name: 'Angel Amaya Balion', url: 'https://github.com/amy9273' }],
  creator: 'Angel Amaya Balion',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/amy9273/portfolio',
    title: 'Angel Amaya Balion — Student Software Developer',
    description:
      'Personal portfolio of Angel Amaya Balion, a fourth-year IT student at De La Salle Lipa building web applications, backend systems, and mobile apps.',
    siteName: 'Angel Amaya Balion Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Amaya Balion — Student Software Developer',
    description:
      'Personal portfolio of Angel Amaya Balion, a fourth-year IT student at De La Salle Lipa building web applications, backend systems, and mobile apps.',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-void text-cloud font-sans antialiased selection:bg-electric-lavender/30 selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
