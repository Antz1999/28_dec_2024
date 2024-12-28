import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md py-4 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 flex-wrap">
          <Logo />
          <h1 className="font-title text-sm font-[100] tracking-wider text-gray-300">
            glimpse.london
          </h1>
          <p className="font-title text-sm font-[100] tracking-wider text-[#6BB5F5]">
            radio show
          </p>
          <p className="font-title text-sm font-[100] tracking-wider text-[#6BB5F5]">
            house | techno
          </p>
          <p className="font-title text-sm font-[100] tracking-wider text-gray-300">
            live every 3rd sunday of the month
          </p>
          <p className="font-title text-sm font-[100] tracking-wider text-gray-300">
            15:00 - 17:00 GMT
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;