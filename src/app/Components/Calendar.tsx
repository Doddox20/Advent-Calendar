// Calendar.tsx
"use client"
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import YouTube from 'react-youtube';
import Day from './Day';

function createConfetti() {
    let duration: number = 5 * 1000;
    let animationEnd: number = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    function randomInRange(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }
  
    let interval: NodeJS.Timeout = setInterval(function() {
      let timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      let particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

const Calendar: React.FC = () => {
  const storedDays = localStorage.getItem('openedDays');
  const initialOpenedDays = storedDays ? JSON.parse(storedDays) : [];

  const [openedDays, setOpenedDays] = useState<number[]>(initialOpenedDays);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [videos, setVideos] = useState<Record<number, string | null>>({});

  const videosByDay: Record<number, string> = {
    1: 'uGSCvZqzRlY',
    2: 'k0t_DKP67so',
    3: '...',
    4: '...',
    5: '...',
    6: '...',
    7: '...',
    8: '...',
    9: '...',
    10: '...',
    11: '...',
    12: '...',
    13: '...',
    14: '...',
    15: '...',
    16: '...',
    17: '...',
    18: '...',
    19: '...',
    20: '...',
    21: '...',
    22: '...',
    23: '...',
    24: '...',
    25: '...',
    

  };

  function loadVideoForDay(day: number, videosByDay: Record<number, string>): string | null {
    const videoId = videosByDay[day];
    if (videoId) {
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      return videoUrl;
    }
    return null;
  }

  const handleDayClick = (day: number) => {
    if (selectedDay === day) {
      setSelectedDay(null);
    } else {
      if (!openedDays.includes(day)) {
        const updatedDays = [...openedDays, day];
        setOpenedDays(updatedDays);
        localStorage.setItem('openedDays', JSON.stringify(updatedDays));
      }
      setSelectedDay(day);
      setIsOpening(true);

      createConfetti();

      setTimeout(() => {
        setIsOpening(false);

        const videoUrl = loadVideoForDay(day, videosByDay);
      if (videoUrl !== null) {
        setVideos({ ...videos, [day]: videoUrl });
      }
    }, 1500);
    }
  };

  const days: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center">
      {days.map((day) => (
        <Day
          key={day}
          dayNumber={day}
          isOpen={openedDays.includes(day)}
          onDayClick={() => handleDayClick(day)}
          isAnimating={isOpening && selectedDay === day}
          videoUrl={videos[day]}
        />
      ))}
    </div>
  );
};

export default Calendar;
