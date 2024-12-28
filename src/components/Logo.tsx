import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-8 h-8 relative">
      <img
        src="https://i.ibb.co/Gtj2T8j/GL-transparent.png"
        alt="Glimpse London Logo"
        className="w-full h-full object-contain brightness-0 invert opacity-80"
        loading="eager"
      />
    </div>
  );
};

export default Logo;