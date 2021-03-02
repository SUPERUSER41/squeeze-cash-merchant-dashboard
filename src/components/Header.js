import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 px-7 bg-gray-darkest">
      <div className="flex items-center space-x-7 justify-between">
        <button type="button">
          <FiMenu className="text-gray-lightest text-3xl" />
        </button>
        <h1 className="font-normal text-2xl text-gray-lightest">
          Point of Sale
        </h1>
      </div>
      <h1 className="font-bold text-2xl text-gray-lightest">
        Tue., Jan. 15, 2021, 9:41 AM
      </h1>
      <button type="button">
        <FiX className="text-white text-3xl" />
      </button>
    </div>
  );
};

export default Header;
