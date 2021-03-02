import {
  RiDashboardLine,
  RiArrowRightSLine,
  RiQrCodeLine,
  RiSettings4Line,
} from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col justify-between w-96 px-5 py-5 bg-gray-darkest">
        <header className="">
          <div className="rounded-full bg-gray-lightest w-8 h-8">logo</div>
        </header>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-between px-4 py-5 bg-gray-light"
          >
            <div className="flex items-start flex-col">
              <p className="font-normal text-xs text-gray-lightest">
                Select Store
              </p>
              <p className="font-normal text-gray-lightest">Rodney Bay</p>
            </div>
            <RiArrowRightSLine
              className="align-middle mb-4 text-gray-lightest"
              size="30"
            />
          </button>
          <button
            type="button"
            className="flex items-center justify-between px-4 py-5 bg-gray-light"
          >
            <div className="flex items-start flex-col">
              <p className="font-normal text-xs text-gray-lightest">
                New Orders
              </p>
              <p className="font-normal text-gray-lightest">Available</p>
            </div>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-green"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
          <button
            type="button"
            className="flex flex-col items-center justify-center py-5 bg-gray-light"
          >
            <RiDashboardLine className="mb-4 text-white" size="30" />
            <p className="font-medium text-white">Dashboard</p>
          </button>
        </div>
        <footer className="flex border-t-3 border-gray">
          <div className="flex items-center space-x-4">
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-white">@burgerking</p>
                <GoVerified className="text-blue" />
              </div>
              <p className="text-white">Andre Rolland</p>
            </div>
            <RiSettings4Line className="text-gray-lightest" size="30" />
            <RiQrCodeLine className="text-gray-lightest" size="30" />
            <button
              type="button"
              className="font-medium bg-gray-lightest px-3 py-1"
            >
              Sign Out
            </button>
          </div>
        </footer>
      </div>
      <div className="flex-grow bg-green">main content</div>
    </div>
  );
}
