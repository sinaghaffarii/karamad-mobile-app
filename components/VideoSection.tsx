import { PlayIcon } from 'lucide-react';

function VideoSection() {
  return (
    <div className="px-6 mt-8" data-aos="fade-up" data-aos-delay="250">
      <p className="text-[13px] font-medium mb-2">ویدیو آموزشی</p>
      <div className="rounded-xl border border-gray-200 bg-gray-50 h-36 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600">
          <PlayIcon className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
