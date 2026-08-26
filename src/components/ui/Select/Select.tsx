"use client"

import Options from './Options/Options';
import { useState } from 'react';
import { optionsList } from '../../../constants/optionsList'; 
import './Select.css';

const Select = ({ onChange }: { onChange?: (id: 'all' | 'car' | 'truck' | 'van') => void }) => {
  const [selected, setSelected] = useState<string>("all"); // 👈 ahora guarda un string

  return (
    <div className="select-wrapper">
      <div className="select-wrapper-icon">
        {optionsList.map((option) => (
          <Options
            key={option.id}
            title={option.title}
            image={option.image}
            selected={selected === option.id}
            onClick={() => {
              setSelected(option.id);
              onChange?.(option.id); 
            }}
            id={option.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Select;
