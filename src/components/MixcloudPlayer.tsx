import React, { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';

const MixcloudPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIframeLoaded(true);
    }
  }, [showModal]);

  return (
    <>
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
        <h2 className="font-title text-2xl font-thin tracking-wider mb-6">Latest Show</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-thin"
        >
          Listen to Latest Show <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-black rounded-xl w-full max-w-4xl relative h-[80vh] overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>
            {iframeLoaded && (
              <div className="w-full h-full">
                <iframe
                  title="Mixcloud Player"
                  width="100%"
                  height="100%"
                  src="https://www.mixcloud.com/widget/iframe/?feed=%2FMusicBoxRadioUK%2Fglimpse-sunday-20th-october-2024%2F&hide_cover=1&light=0"
                  frameBorder="0"
                  allow="autoplay"
                  className="rounded-lg"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MixcloudPlayer;