import { useState } from 'react';

export const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={`w-14 h-8 ${
        isActive ? 'bg-green-dark' : 'bg-gray-tab'
      } rounded-full flex-shrink-0 p-1 focus:outline-none`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
          isActive && 'translate-x-6'
        } duration-300 ease-in-out
          `}
      />
    </button>
  );
};
