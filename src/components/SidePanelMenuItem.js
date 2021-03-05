const SidePanelMenuItem = ({ title, icon }) => {
  return (
    <button
      type="button"
      className="group flex flex-col items-center justify-center py-5 bg-gray-light hover:bg-green transition-colors duration-500"
    >
      {icon}
      <p className="font-medium text-gray-lightest group-hover:text-white">
        {title}
      </p>
    </button>
  );
};

export default SidePanelMenuItem;
