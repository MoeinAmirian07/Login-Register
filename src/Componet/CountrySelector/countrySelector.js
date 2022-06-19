import React, { useCallback } from "react";
import { Select } from "@shopify/polaris";
import { useField } from "formik";
import { consts } from "../../consts";

export const CountrySelector = ({ name, label, ...props }) => {
  const [field, , helper] = useField(name);
  const handleSelectChange = useCallback(
    (value) => {
      helper.setValue(value);
    },
    [helper]
  );

  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <Select
        id={field.name}
        name={field.name}
        options={consts}
        onChange={handleSelectChange}
        value={field.value}
        {...props}
      />
    </>
  );
};
