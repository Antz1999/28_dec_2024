import React from 'react';
import { Instagram, Mail } from 'lucide-react';

interface SocialLinksProps {
  onContactClick: () => void;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ onContactClick }) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <a
        href="https://www.instagram.com/glimpse.london"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4B9FE1] hover:text-[#6BB5F5] transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <button
        onClick={onContactClick}
        className="text-[#4B9FE1] hover:text-[#6BB5F5] transition-colors"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialLinks;