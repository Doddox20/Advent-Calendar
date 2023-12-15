"use client"
import React, { useState } from 'react';
import Day from './Day';

const Calendar: React.FC = () => {
  const [openedDays, setOpenedDays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDayClick = (day: number) => {
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
      setSelectedDay(day);
    }
  };

  const handleClosePopup = () => {
    setSelectedDay(null);
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
