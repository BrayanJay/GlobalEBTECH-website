'use client';

import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '94770677157';
  const message = encodeURIComponent(
    'Hi! I am interested in your services. Can you help me?'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6 invert" />
      <span className="hidden sm:block font-medium">Chat with Us</span>
    </a>
  );
}
