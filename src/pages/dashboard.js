import { Panel, Menu } from '../components';
import Icon from '../components/Icon';
import MENUS from '../menu.json';
import Logo from '../../public/logo.svg';

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen">
      <Panel>
        <Panel.Header>
          <Logo />
          <button type="button">
            <Icon
              family="Remix"
              name="RiCloseFill"
              className="text-gray-lightest"
              size="30"
            />
          </button>
        </Panel.Header>
        <Panel.Body>
          <Menu>
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
              <Menu.Item key={menu.title}>
                {menu.count && <Menu.Item.Badge>{menu.count}</Menu.Item.Badge>}
                <Icon
                  family={menu.iconFamily}
                  name={menu.iconName}
                  className="mb-4 text-gray-lightest group-hover:text-white"
                  size="30"
                />
                <Menu.Item.Title>{menu.title}</Menu.Item.Title>
              </Menu.Item>
            ))}
          </Menu>
        </Panel.Body>
        <Panel.Footer />
      </Panel>
      <div className="flex-grow bg-white">Tue., Jan. 15, 2021, 9:41 AM</div>
    </div>
  );
};

export default Dashboard;
