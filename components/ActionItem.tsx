import React from 'react';

export function ActionItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-[12px] text-[#111827] cursor-pointer">
      <div className="w-13 h-13 rounded-xl bg-[#F7F7F7] flex items-center justify-center mb-1 text-[#F97316] border">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  );
}
