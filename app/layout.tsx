import type { Metadata } from 'next';

import './globals.css';
import { BottomNav } from '@/components/BottomNav';
import { Header } from '@/components/Header';
import { RegisterSW } from '@/components/RegisterSW';

import { vazirmatn } from './fonts/vazirmatn';

export const metadata: Metadata = {
  title: 'Karamad',
  description: 'Implementation of trading strategies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" className={vazirmatn.variable}>
      <body className="antialiased">
        <RegisterSW />
        <div className="min-h-screen bg-white text-[#111827] rtl">
          <div className="max-w-sm mx-auto relative min-h-screen flex flex-col">
            <Header />
            {children}
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
