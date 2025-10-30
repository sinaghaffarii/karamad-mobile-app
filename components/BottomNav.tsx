import { FileText, HomeIcon, Menu, Repeat } from 'lucide-react';

import { NavItem } from './NavItem';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-sm mx-auto">
      <div className="flex justify-around items-center py-2 text-xs">
        <NavItem href="/" label="خانه" icon={<HomeIcon size={20} />} />
        <NavItem href="/funds" label="صندوق‌ها" icon={<FileText size={20} />} />
        <NavItem href="/myCapital" label="سرمایه من" icon={<Repeat size={20} />} />
        <NavItem href="/more" label="بیشتر" icon={<Menu size={20} />} />
      </div>
    </nav>
  );
}
