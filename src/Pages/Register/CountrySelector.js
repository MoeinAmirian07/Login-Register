import React, { useCallback, useState } from "react";
import { Select } from "@shopify/polaris";

const CountrySelector = ({ onGetContry }) => {
  const [selected, setSelected] = useState("Iran");

  const handleSelectChange = useCallback((value) => {
    setSelected(value);
  }, []);
  onGetContry = selected;
  const options = [
    { label: "IRAN", value: "Iran" },
    { label: "USA", value: "USA" },
    { label: "IRAQ", value: "Iraq" },
    { label: "GERMANY", value: "Germany" },
  ];

  return (
    <div>
      <Select
        label="Country"
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    </div>
  );
};

export default CountrySelector;
