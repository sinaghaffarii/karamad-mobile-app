'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function OfflinePage() {
  useEffect(() => {
    if (!navigator.onLine) {
      const handleOnline = () => {
        window.location.reload();
      };

      window.addEventListener('online', handleOnline);

      return () => {
        window.removeEventListener('online', handleOnline);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <Image height={256} width={256} alt="Offline" className="mb-8" src="/images/404-error.png" />
      <h1 className="text-2xl font-bold mb-4">اتصال به اینترنت برقرار نیست</h1>
      <p className="text-gray-600 mb-8">لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
        type="button"
        onClick={() => window.location.reload()}
      >
        تلاش مجدد
      </button>
    </div>
  );
}
