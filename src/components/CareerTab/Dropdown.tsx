import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("-None-");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <span className="Expform-label">
        {label} <span className="Expform-highlight">*</span>
      </span>
      <div
        className="dropdown-selectionContainer"
        onClick={() => setIsOpen(!isOpen)}
        role="combobox"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <div className="dropdown-selectionText">{selectedValue}</div>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="lucide/chevron-down">
            <path id="Vector" d="M4.5 6.09961L8.5 10.0996L12.5 6.09961" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </div>
      {isOpen && (
        <ul className="dropdown-dropdownList">
          {options.map((option) => (
            <li key={option} className="dropdown-dropdownItem" onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;