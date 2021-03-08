import { createContext } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Icon from './Icon';

const PanelContext = createContext();

// const usePanelContext = () => {
//   const context = useContext(PanelContext);
//   if (!context) {
//     throw new Error(
//       'Panel compound components cannot be rendered outside the Panel component',
//     );
//   }
//   return context;
// };

const Header = ({ className, children, ...rest }) => {
  return (
    <header
      className={classNames('flex items-center justify-between', className)}
      {...rest}
    >
      {children}
    </header>
  );
};

const Footer = () => {
  return (
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
  );
};

const Body = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const Panel = ({ className, children, ...rest }) => {
  return (
    <PanelContext.Provider>
      <div
        className={classNames(
          'flex flex-col justify-between w-96 px-5 py-5 bg-gray-darkest',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </PanelContext.Provider>
  );
};

Panel.Header = Header;
Panel.Footer = Footer;
Panel.Body = Body;
