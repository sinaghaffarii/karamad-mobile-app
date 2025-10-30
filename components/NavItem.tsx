'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <button
        className={`flex flex-col items-center gap-1 cursor-pointer ${pathname === href ? 'text-[#F97316]' : 'text-[#6B7280]'}`}
        type="button"
      >
        {icon}
        <span>{label}</span>
      </button>
    </Link>
  );
}
