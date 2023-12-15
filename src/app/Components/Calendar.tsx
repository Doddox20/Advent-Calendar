"use client"
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
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
      }, 1500);
    }
  };

  const handleClosePopup = () => {
    setSelectedDay(null);
  };

  const days: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  useEffect(() => {
    const storedDays = localStorage.getItem('openedDays');
    const initialOpenedDays = storedDays ? JSON.parse(storedDays) : [];
    setOpenedDays(initialOpenedDays);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {days.map((day) => (
        <Day
          key={day}
          dayNumber={day}
          isOpen={openedDays.includes(day)}
          onDayClick={() => handleDayClick(day)}
          isAnimating={isOpening && selectedDay === day}
        />
      ))}

      {selectedDay !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <p>Contenu pour le jour {selectedDay}</p>
            <button onClick={handleClosePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Calendar;
