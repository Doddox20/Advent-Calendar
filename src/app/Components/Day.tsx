// Day.tsx
import React, { useState } from 'react';
import YouTube from 'react-youtube';

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
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    if (showVideo && videoUrl) {
      return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <YouTube videoId={videoUrl} opts={opts} />
            <button onClick={() => setShowVideo(false)}>Fermer la vidéo</button>
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
