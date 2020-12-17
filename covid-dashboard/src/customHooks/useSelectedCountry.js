import React from 'react';

const useSelectedCountry = (countryId, selectedCountryId) => {
  const [isSelected, setSelected] = React.useState(false);

  React.useEffect(() => {
    if (countryId === selectedCountryId) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedCountryId]);

  return isSelected;
};

export default useSelectedCountry;
