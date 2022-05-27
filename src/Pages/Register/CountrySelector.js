import React, { useCallback, useState } from "react";
import { Select } from "@shopify/polaris";

const CountrySelector = () => {
  const [selected, setSelected] = useState("Iran");

  const handleSelectChange = useCallback((value) => {
    setSelected(value);
    console.log(value);
  }, []);

  const options = [
    { label: "IRAN", value: "Iran" },
    { label: "USA", value: "USA" },
    { label: "IRAQ", value: "Iraq" },
    { label: "GERMANY", value: "Germany" },
  ];

  return (
    <div style={{ color: "rgb(156, 37, 83)" }}>
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
