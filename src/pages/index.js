import Image from 'next/image';
import Logo from '../../public/logo.svg';
import SidePanelMenuItem from '../components/SidePanelMenuItem';
import Icon from '../components/Icon';

const MENUS = [
  {
    title: 'Dashboard',
    iconFamily: 'Remix',
    iconName: 'RiDashboardLine',
  },
  {
    title: 'Point of Sale',
    iconFamily: 'Ant',
    iconName: 'AiOutlineAppstore',
  },
  {
    title: 'Orders',
    iconFamily: 'Remix',
    iconName: 'RiShoppingBagLine',
  },
  {
    title: 'Activity',
    iconFamily: 'Remix',
    iconName: 'RiBarChartFill',
  },
  {
    title: 'Promotions',
    iconFamily: 'Bootstrap',
    iconName: 'BsFillLightningFill',
  },
  {
    title: 'My Marketplace',
    iconFamily: 'Ionicon',
    iconName: 'IoPricetagOutline',
  },
  {
    title: 'Rewards +',
    iconFamily: 'Feather',
    iconName: 'FiGift',
  },
  {
    title: 'Bill Payments',
    iconFamily: 'Remix',
    iconName: 'RiBillLine',
  },
  {
    title: 'Live Support',
    iconFamily: 'Material',
    iconName: 'MdLiveHelp',
  },
];

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col justify-between w-96 px-5 py-5 bg-gray-darkest">
        <header>
          <Logo />
        </header>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="group flex items-center justify-between px-4 py-5 bg-gray-light hover:bg-green transition-colors duration-300"
          >
            <div className="flex items-start flex-col">
              <p className="font-normal text-xs text-gray-lightest group-hover:text-white">
                Select Store
              </p>
              <p className="font-normal text-gray-lightest group-hover:text-white">
                Rodney Bay
              </p>
            </div>

            <Icon
              family="Remix"
              name="RiArrowRightSLine"
              className="text-gray-lightest group-hover:text-white"
              size="30"
            />
          </button>
          <button
            type="button"
            className="group flex items-center justify-between px-4 py-5 bg-gray-light hover:bg-green transition-colors duration-300"
          >
            <div className="flex items-start flex-col">
              <p className="font-normal text-xs text-gray-lightest group-hover:text-white">
                New Orders
              </p>
              <p className="font-normal text-gray-lightest group-hover:text-white">
                Available
              </p>
            </div>
            <Icon
              family="Remix"
              name="RiArrowRightSLine"
              className="text-gray-lightest group-hover:text-white"
              size="30"
            />
          </button>
          {MENUS.map((menu) => (
            <SidePanelMenuItem
              key={menu.title}
              title={menu.title}
              icon={
                <Icon
                  family={menu.iconFamily}
                  name={menu.iconName}
                  className="mb-4 text-gray-lightest group-hover:text-white"
                  size="30"
                />
              }
            />
          ))}
        </div>
        <footer className="flex items-center justify-between pt-4 border-t-4 border-gray">
          <div className="flex items-center justify-between space-x-3">
            <Image
              src="/burgerking.png"
              alt="merchant logo"
              width="35"
              height="35"
            />
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-white">@burgerking</p>
                <Icon family="Go" name="GoVerified" className="text-blue" />
              </div>
              <p className="text-xs text-white">Andre Rolland</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Icon
              family="Remix"
              name="RiSettings4Line"
              className="text-gray-lightest"
              size="30"
            />
            <Icon
              family="Remix"
              name="RiQrCodeLine"
              className="text-gray-lightest"
              size="30"
            />
            <button
              type="button"
              className="font-medium bg-gray-lightest px-3 py-1"
            >
              Sign Out
            </button>
          </div>
        </footer>
      </div>
      <div className="flex-grow bg-white">Tue., Jan. 15, 2021, 9:41 AM</div>
    </div>
  );
}
