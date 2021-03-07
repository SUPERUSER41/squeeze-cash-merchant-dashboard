import { createElement } from 'react';
import {
  RiDashboardLine,
  RiShoppingBagLine,
  RiBarChartFill,
  RiBillLine,
  RiArrowRightSLine,
  RiQrCodeLine,
  RiSettings4Line,
  RiCloseFill,
} from 'react-icons/ri';
import { BsFillLightningFill } from 'react-icons/bs';
import { IoPricetagOutline } from 'react-icons/io5';
import { FiGift } from 'react-icons/fi';
import { MdLiveHelp } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';

const ICON_FAMILIES = {
  Remix: {
    RiDashboardLine,
    RiShoppingBagLine,
    RiBarChartFill,
    RiBillLine,
    RiArrowRightSLine,
    RiQrCodeLine,
    RiSettings4Line,
    RiCloseFill,
  },
  Bootstrap: {
    BsFillLightningFill,
  },
  Ionicon: { IoPricetagOutline },
  Feather: { FiGift },
  Material: { MdLiveHelp },
  Ant: { AiOutlineAppstore },
  Go: {
    GoVerified,
  },
};

const Icon = ({ family, name, ...rest }) => {
  return createElement(ICON_FAMILIES[family][name], rest);
};
export default Icon;
