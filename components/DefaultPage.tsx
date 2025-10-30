'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false },
);

export default function DefaultPage() {
  return (
    <div className="flex items-center justify-center flex-col w-11/12 h-[400px] mx-auto text-center mt-10">
      <h2 className="text-2xl font-semibold mb-2">صفحه مورد نظر در حال ساخت میباشد!</h2>
      <DotLottieReact className="size-60" src="/images/CreatingPage.json" autoplay loop />
      <p className="mt-4 text-gray-600">
        این صفحه هنوز در حال ساخت است. به زودی در دسترس شما قرار خواهد گرفت. لطفاً در روزهای آینده
        دوباره سر بزنید.
      </p>
      <Link href="/">
        <Button className="mt-6" variant="outline">
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </div>
  );
}
