import React from 'react';
import { ExternalLink, Share2, ChevronDown } from 'lucide-react';

const AudioPlayer = () => {
  const shareShow = () => {
    const shareData = {
      title: 'glimpse.london on Music Box Radio',
      text: 'Listen to glimpse.london house & techno show on Music Box Radio',
      url: 'https://www.mixcloud.com/glimpse_london/glimpselondon-musicboxradio-15th-dec-2024/'
    };

    if (navigator.share) {
      navigator.share(shareData)
        .catch((err) => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(shareData.url)
        .then(() => alert('Link copied to clipboard!'))
        .catch((err) => console.log('Error copying:', err));
    }
  };

  return (
    <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 mt-4 md:mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-title text-sm font-[100] tracking-wider text-gray-300">latest show</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={shareShow}
            className="inline-flex items-center gap-2 text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors font-[100] text-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
          <a 
            href="https://www.mixcloud.com/glimpse_london/glimpselondon-musicboxradio-15th-dec-2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6BB5F5] hover:text-[#8CCAFF] transition-colors font-[100] text-sm"
          >
            Listen on Mixcloud <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      <div className="max-w-[300px] mx-auto opacity-55">
        <a 
          href="https://www.mixcloud.com/glimpse_london/glimpselondon-musicboxradio-15th-dec-2024/"
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-square rounded-lg overflow-hidden transition-opacity hover:opacity-100"
        >
          <img 
            src="https://i.imgur.com/y8MfjUW.jpg"
            alt="Glimpse London Show" 
            className="w-full h-full object-cover mix-blend-luminosity transition-all hover:mix-blend-normal"
            loading="eager"
            decoding="sync"
          />
        </a>
      </div>
      <div className="md:hidden flex justify-center mt-6">
        <ChevronDown className="w-6 h-6 text-[#6BB5F5] animate-bounce opacity-50" />
      </div>
    </div>
  );
};

export default AudioPlayer;