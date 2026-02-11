import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Global EB Tech',
  description: 'Global EB Tech is a Dehiwala-based business solutions provider delivering BPO services, digital development, creative branding, event management, and technical consultancy for clients across Sri Lanka and worldwide. With over 12 years of industry experience, we combine technology, operational expertise, and a human-centered approach to help businesses improve customer engagement, strengthen their digital presence, and execute impactful on-ground initiatives.',
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