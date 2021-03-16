import classNames from 'classnames';

export const Item = ({ className, children }) => {
  return (
    <button
      type="button"
      className={classNames(
        'relative group flex flex-col items-center justify-center py-5 px-2 bg-gray-light hover:bg-green transition-colors duration-500',
        className,
      )}
    >
      {children}
    </button>
  );
};

const Badge = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-center p-3 rounded-full text-xs w-7 h-7 bg-white absolute top-2 right-2',
        className,
      )}
    >
      {children}
    </div>
  );
};

const Title = ({ className, children }) => {
  return (
    <p
      className={classNames(
        'font-medium text-gray-lightest group-hover:text-white',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Menu = ({ className, children }) => {
  return (
    <div className={classNames('grid grid-cols-2 gap-4', className)}>
      {children}
    </div>
  );
};

Menu.Item = Item;
Menu.Item.Badge = Badge;
Menu.Item.Title = Title;
