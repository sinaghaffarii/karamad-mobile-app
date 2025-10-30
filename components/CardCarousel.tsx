'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { Card } from '@/utils/types';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  cards: Card[];
}

function CardCarousel({ cards }: Props) {
  return (
    <div className="px-4 mt-2 aos-init aos-animate" data-aos="fade-up">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={12}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className={cn(
                'flex-[0_0_85%] transition-transform duration-300 ease-in-out cursor-pointer',
                'rounded-2xl overflow-hidden',
                'last:mr-0',
              )}
            >
              <Card
                className="border-0 shadow-none rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: card.color,
                }}
              >
                <div className="text-white px-4 py-5 flex flex-col justify-between min-h-[120px]">
                  <div className="flex justify-between items-center">
                    <div className="text-[13px]">{card.title}</div>
                    <div className="text-[12px] opacity-80">موجودی</div>
                  </div>
                  <div className="text-[12px] opacity-90 mt-1">{card.subtitle}</div>
                  <div className="mt-3 text-[14px] font-semibold">{card.balance} ریال</div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardCarousel;
