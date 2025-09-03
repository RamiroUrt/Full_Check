
import VanIcon from '../../public/svg/options/all-terrain-vehicle-svgrepo-com.svg';
import CarIcon from '../../public/svg/options/car-svgrepo-com.svg';
import TruckIcon from '../../public/svg/options/truck-svgrepo-com.svg';
import Allicon from '../../public/svg/options/todo-svgrepo-com.svg';


import { OptionsTypes } from '../types/Options.Types';

export const optionsList: OptionsTypes[] = [
  {
    title: "Todo",
    image: Allicon,
  },
  {
    title: "Autos",
    image: CarIcon,
  },
  {
    title: "Camionetas",
    image: VanIcon,
  },
    {
    title: "Camiones",
    image: TruckIcon,
  },
];
