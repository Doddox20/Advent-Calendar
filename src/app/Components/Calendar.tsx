"use client"
import React, { useState } from 'react';

function Calendar() {
  const [openedDays, setOpenedDays] = useState<number[]>([]);

  const handleDayClick = (day: number) => {
    // Ouvrir une journée et maj
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
    }
  };

  const days: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center">
      {days.map((day) => (
        <div
          key={day}
          onClick={() => handleDayClick(day)}
          className={`w-40 h-40 border border-green-300 flex items-center justify-center rounded-md m-2 cursor-pointer 
          ${openedDays.includes(day) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
