import { FiMenu, FiX, FiBell } from 'react-icons/fi';
import { AiOutlineShop } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 px-7 bg-gray-darkest">
      <div className="flex items-center space-x-7 justify-between">
        <button type="button">
          <FiMenu className="text-gray-lightest text-3xl" />
        </button>
        <h1 className="font-normal text-2xl text-gray-lightest">Register</h1>
        <button
          type="button"
          className="flex items-center space-x-1 rounded-full py-1 px-3 text-white bg-gray-light"
        >
          <p>New Orders</p>
          <AiOutlineShop />
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 rounded-full py-1 px-3 text-white bg-gray-light"
        >
          <AiOutlineShop />
          <p>Rodney Bay</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-1 rounded-full py-1 px-3 text-white bg-gray-light"
        >
          <FiBell />
          <p>17 New Alerts</p>
        </button>
      </div>
      <div className="flex items-center space-x-7 justify-between">
        <h1 className="font-normal text-2xl text-gray-lightest">
          Tue., Jan. 15, 2021, 9:41 AM
        </h1>
        <button type="button">
          <FiX className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
