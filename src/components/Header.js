import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 px-7 bg-gray-700">
      <div className="flex items-center space-x-3 justify-between">
        <button type="button">
          <FiMenu className="text-gray-400 text-3xl" />
        </button>
        <p className="font-normal text-2xl text-gray-400">Register</p>
      </div>
      <div className="flex items-center space-x-3 justify-between">
        <p className="font-normal text-2xl text-gray-400">
          Tue., Jan. 15, 2021, 9:41 AM
        </p>
        <button type="button">
          <FiX className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
