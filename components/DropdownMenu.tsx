import React, { useState } from "react";

type DropdownOption = {
  label: string;
  value: string | number;
};

type DropdownMenuProps = {
  options: DropdownOption[];
  onSelect: (value: string | number) => void;
  placeholder?: string;
  className?: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  onSelect,
  placeholder = "Selecione...",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      
      <button
        className="px-4 py-2 rounded-md w-full text-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected.label : placeholder}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-trasparent border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
