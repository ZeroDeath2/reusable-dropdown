/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../styles/dropdown.scss'; 

const Dropdown = ({ options, placeholder, searchable, disabled, defaultSelected, direction = 'down', onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(defaultSelected || null);

  useEffect(() => {
    if (defaultSelected) {
      setSelectedOption(defaultSelected);
    }
  }, [defaultSelected]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (option) => {
    if (!option.disabled) {
      setSelectedOption(option);
      setIsOpen(false);
      setSearchTerm(""); 
      if (onSelect) {
        onSelect(option); 
      }
    }
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`dropdown ${direction}`}>
      {isOpen && searchable ? (
        <input
          type="text"
          className="dropdown-search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          autoFocus
        />
      ) : (
        <div className={`dropdown-header ${disabled ? "disabled" : ""}`} onClick={toggleDropdown}>
          {selectedOption ? (
            <>
              {selectedOption.icon && <span className="icon"><i className={`bi ${selectedOption.icon}`}></i></span>}
              {selectedOption.label}
            </>
          ) : (
            placeholder
          )}
          <span className="arrow">
            <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </span>
        </div>
      )}
      {isOpen && (
        <div className="dropdown-body">
          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={`dropdown-item ${selectedOption?.value === option.value ? "selected" : ""} ${option.disabled ? "disabled" : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {selectedOption?.value === option.value && <span className="tick-icon">✓</span>}
                  {option.icon && <span className="icon"><i className={`bi ${option.icon}`}></i></span>}
                  {option.label}
                </li>
              ))
            ) : (
              <li className="dropdown-item disabled">Nothing found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;