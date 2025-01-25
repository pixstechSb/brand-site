import React, { useState } from 'react';
import '../widgets/dropdown.css'

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  defaultOption: string; 
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
      <div
        className="dropdown-toggle"
        onClick={toggleDropdown}
        style={{
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          outline: 'none',
        }}
      >
        {selectedOption ||  defaultOption}
        <img className='dropdown-icon' src='src/assets/dd-icon.png' height='10px' width='10px' />

      </div>
      
      {isOpen && (
        <div className="dropdown-menu" style={{
          position: 'absolute',
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 1,
          marginTop: '5px',
          borderRadius: '4px',
        }}>
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
              style={{
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;