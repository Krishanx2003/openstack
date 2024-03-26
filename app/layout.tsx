import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';


const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'OpenStack',
  description: 'Unleash your potential with AIHubPro! Explore cutting-edge tools, dive into engaging discussions, and propel your AI journey forward.',
  icons: '/public/logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
    return (
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ClerkProvider
            appearance={{
              elements: {
                formButtonPrimary: "primary-gradient",
                footerActionLink: "primary-text-gradient hover:text-primary-500",
              },
            }}
          >
            <ThemeProvider>{children}</ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    );
  }
  