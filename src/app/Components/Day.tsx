import React from 'react';

interface DayProps {
  key: number;
  dayNumber: number;
  isOpen: boolean;
  onDayClick: () => void;
  isAnimating: boolean;
}

const Day: React.FC<DayProps> = ({ dayNumber, isOpen, onDayClick, isAnimating }) => {
  return (
    <div
      onClick={onDayClick}
      className={`w-40 h-40 border border-green-300 flex items-center justify-center rounded-md m-2 cursor-pointer 
      ${isOpen ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'}`}
    >
      {dayNumber}
    </div>
  );
};

export default Day;
