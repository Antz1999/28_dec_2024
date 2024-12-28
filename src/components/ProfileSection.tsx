import React from 'react';

const ProfileSection = () => {
  return (
    <div className="bg-black/10 backdrop-blur-[2px] rounded-xl p-6 mt-4 md:mt-12 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-4">
        <div className="w-full md:w-1/3">
          <div className="rounded-lg overflow-hidden opacity-75 hover:opacity-100 transition-opacity relative">
            <div className="absolute inset-0 bg-[#4B9FE1]/20 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4B9FE1]/90 via-[#4B9FE1]/50 to-transparent mix-blend-overlay z-20"></div>
            <img
              src="https://i.postimg.cc/y6y3FfhY/Glimpse.png"
              alt="DJ Ant Profile"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="font-title text-sm font-[100] tracking-wider text-gray-300 leading-relaxed">
            Glimpse is a creative collective where like-minded electronic music enthusiasts can collaborate. Whether playing in a club/live environment or as a vehicle to realise solo/collaborative music projects through the Glimpse Recordings label. Glimpse's productions and sets are generally considered 'techno,' but they have never been afraid to venture into the deeper ends of electro, dub techno, and house.
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="font-title text-sm font-[100] tracking-wider text-gray-300 leading-relaxed">
          Notable highlights include tracks championed by leading techno exponents such as Richie Hawtin, Magda, and Laurent Garnier, to name a few. This exposure has led to DJ gigs across the UK and Europe, including Stanton Calling Festival (UK), MOS (London), Watergate (Berlin), Harry Klein (Munich), and The Rex Club (Paris). The ethos has always remained the same—make everything about the music and let the music speak for itself. Do not fixate on the individuals behind the sound; that's simply an unwanted distraction.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;