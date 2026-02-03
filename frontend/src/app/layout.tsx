import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Your Company Name',
  description: 'Your company description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}