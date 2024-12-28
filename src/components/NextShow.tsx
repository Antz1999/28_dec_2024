import React from 'react';
import { Calendar, Instagram, Mail, Link2, Share2, Radio } from 'lucide-react';

interface NextShowProps {
  showDate: Date;
  onAddToCalendar: () => void;
  onContactClick: () => void;
}

const NextShow: React.FC<NextShowProps> = ({ showDate, onAddToCalendar, onContactClick }) => {
  const copyShowLink = () => {
    navigator.clipboard.writeText('https://www.mixcloud.com/live/MusicBoxRadioUK/')
      .then(() => alert('Link copied to clipboard!'))
      .catch((err) => console.log('Error copying:', err));
  };

  const shareWebsiteLink = async () => {
    const shareData = {
      title: 'glimpse.london',
      text: 'Check out glimpse.london - House & Techno Radio Show',
      url: 'https://glimpse.london'
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Error sharing:', err);
      await navigator.clipboard.writeText(shareData.url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 mt-4 md:mt-12">
      <h2 className="font-title text-sm font-[100] tracking-wider text-gray-300 mb-8">next show on musicboxradio.co.uk</h2>
      <div className="space-y-6 mb-8">
        <div className="space-y-2">
          <p className="font-body text-base text-gray-300 font-[100] leading-relaxed">
            every 3rd sunday of the month
          </p>
          <p className="font-body text-base text-gray-300 font-[100] leading-relaxed">
            15:00 - 17:00 gmt
          </p>
        </div>
        <p className="font-body text-base text-gray-300 font-[100] leading-relaxed">
          {showDate.toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).toLowerCase()}
        </p>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onAddToCalendar}
          className="flex items-center gap-2 bg-[#4B9FE1]/90 text-white px-4 py-2 rounded-lg font-title text-sm font-[100] tracking-wider hover:bg-[#4B9FE1] transition-colors"
        >
          <Calendar className="w-4 h-4" />
          add to calendar
        </button>
        <button
          onClick={copyShowLink}
          className="text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors group relative"
          title="Copy live show link"
        >
          <Link2 className="w-6 h-6" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            copy live show link
          </span>
        </button>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/glimpse.london"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors group relative"
        >
          <Instagram className="w-6 h-6" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            follow on instagram
          </span>
        </a>
        <button
          onClick={shareWebsiteLink}
          className="text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors group relative"
        >
          <Share2 className="w-6 h-6" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            share website
          </span>
        </button>
        <a
          href="https://www.mixcloud.com/live/MusicBoxRadioUK/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors group relative"
        >
          <Radio className="w-6 h-6" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            watch live
          </span>
        </a>
        <button
          onClick={onContactClick}
          className="text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors group relative"
        >
          <Mail className="w-6 h-6" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            contact us
          </span>
        </button>
      </div>
    </div>
  );
};

export default NextShow;