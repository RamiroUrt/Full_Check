"use client"

import Options from './Options/Options';
import { useState } from 'react';
import { optionsList } from '../../../constants/optionsList'; 
import './Select.css';

const Select = () => {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <div className="select-wrapper">
      <div className="select-wrapper-icon">
        {optionsList.map((option, index) => (
          <Options
            key={index}
            title={option.title}
            image={option.image}
            selected={selected === index}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;
