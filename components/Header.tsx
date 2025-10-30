'use client';
import { Bell, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`flex justify-between items-center px-4 pt-3 pb-2 sticky top-0 left-0 bg-white z-10 ${isScrolled ? 'border-b' : ''}`}
    >
      <h1 className="text-[15px] font-semibold">حساب درآمد ویژه</h1>
      <div className="flex items-center gap-4">
        <Button className="border p-2 cursor-pointer" variant="outline">
          <Bell size={26} className="text-[#111827]" />
        </Button>
        <Button className="border p-2 cursor-pointer" variant="outline">
          <Menu size={26} className="text-[#111827]" />
        </Button>
      </div>
    </header>
  );
}
