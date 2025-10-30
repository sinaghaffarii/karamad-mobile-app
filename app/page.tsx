'use client';

import dynamic from 'next/dynamic';

import { cards } from '@/data/cards';
import { useAos } from '@/hooks/useAOS';

const CardCarousel = dynamic(() => import('@/components/CardCarousel'), {
  loading: () => <p>در حال بارگذاری...</p>,
});
const ActionGrid = dynamic(() => import('@/components/ActionGrid'));
const VideoSection = dynamic(() => import('@/components/VideoSection'));

export default function HomePage() {
  useAos();

  return (
    <div>
      <CardCarousel cards={cards} />
      <ActionGrid />
      <VideoSection />
    </div>
  );
}
