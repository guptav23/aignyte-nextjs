import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import LetsTalkModal from '@/components/modals/LetsTalkModal';
import { ModalProvider } from '@/context/ModalContext';
import ScrollRevealInit from '@/components/ui/ScrollRevealInit';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AIgnyte | Message Decisioning Platform — AI-Driven Message Selection for Direct Marketing',
  description:
    'AIgnyte is the pioneer of Message Decisioning — the AI platform that selects the optimal message for each individual customer in direct marketing campaigns. Proven 20–70% response rate lifts across financial services, healthcare, and non-profit.',
  keywords: [
    'message decisioning', 'message decisioning platform', 'AI direct marketing',
    'individual-level personalization', 'direct mail optimization', 'message selection AI',
    'marketing message optimization', 'direct marketing AI', 'creative optimization', 'response rate lift',
  ],
  authors: [{ name: 'AIgnyte' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.aignyte.com/',
    title: 'AIgnyte | Message Decisioning Platform',
    description:
      'The pioneer of Message Decisioning. AI that decides which message to send to each individual customer — automatically. Proven 20–70% lifts in financial services, healthcare, and non-profit.',
    siteName: 'AIgnyte',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIgnyte | Message Decisioning Platform',
    description:
      'The pioneer of Message Decisioning. AI that selects the optimal message for each individual in direct marketing campaigns. 20–70% proven response lifts.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <ModalProvider>
          <div className="grain-overlay" aria-hidden />
          <Nav />
          <main>{children}</main>
          <Footer />
          <LetsTalkModal />
          <ScrollRevealInit />
        </ModalProvider>
      </body>
    </html>
  );
}
