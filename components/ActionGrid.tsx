import { FileText, Repeat, ShoppingBag } from 'lucide-react';

import { ActionItem } from './ActionItem';

function ActionGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 px-6 mt-5" data-aos="fade-up" data-aos-delay="150">
      <ActionItem label="خرید" icon={<ShoppingBag size={24} />} />
      <ActionItem label="فروش" icon={<ShoppingBag size={24} />} />
      <ActionItem label="تبدیل" icon={<Repeat size={24} />} />
      <ActionItem label="تراکنش‌ها" icon={<FileText size={24} />} />
    </div>
  );
}

export default ActionGrid;
