// Day.tsx
import React, { useState } from 'react';

interface DayProps {
  dayNumber: number;
  isOpen: boolean;
  onDayClick: () => void;
  isAnimating: boolean;
  videoUrl: string | null;
}

const Day: React.FC<DayProps> = ({ dayNumber, isOpen, onDayClick, isAnimating, videoUrl }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const renderVideo = () => {
    if (showVideo && videoUrl) {
      return (
        <div className="video-popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <iframe
              title={`Day ${dayNumber} Video`}
              src={videoUrl}
              width="640"
              height="360"
              allowFullScreen
            ></iframe>
            <button onClick={() => setShowVideo(false)} className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Fermer la vidéo</button>
          </div>
        </div>
      );
    }

    return (
      <div
        onClick={() => {
          setShowVideo(true);
          onDayClick();
        }}
        className={`w-40 h-40 border border-green-300 flex items-center justify-center rounded-md m-2 cursor-pointer 
        ${isOpen ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        Jour {dayNumber}
      </div>
    );
  };

  return renderVideo();
};

export default Day;
