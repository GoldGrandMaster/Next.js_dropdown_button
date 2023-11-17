import React, { useState } from 'react';
import Flags from 'react-flags-select';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (countryCode) => {
    setSelectedOption(countryCode);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '50px' }}>
        <Flags
          selected={selectedOption}
          onSelect={handleSelectChange}
          countries={['FI', 'FR']}
        />
      </div>

      {selectedOption && (
        <p>
          {selectedOption === 'FI' ? '$ 53,654.75' : '$ 43,658.98'}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
