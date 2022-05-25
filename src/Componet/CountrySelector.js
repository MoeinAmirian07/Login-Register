import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

const CountrySelector = ({ CountryHandler }) => {
  const [selescted__country, setCountry] = useState("");
  const selectCountryHandler = (selectedCountry) => {
    setCountry({ country: selectedCountry });
    CountryHandler(selectedCountry);
    console.log(selectedCountry);
  };
  return (
    <div>
      <CountryDropdown
        value={selescted__country}
        onChange={(selectedCountry) => selectCountryHandler(selectedCountry)}
      />
    </div>
  );
};

export default CountrySelector;
