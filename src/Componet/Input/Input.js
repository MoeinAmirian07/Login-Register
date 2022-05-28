import { useCallback } from "react";
import { useField, ErrorMessage } from "formik";
import { TextField } from "@shopify/polaris";


export const Input = ({ name, label, ...props }) => {
  const [field, meta, helper] = useField(name);

  const handleOnChange = useCallback((event) => {
    helper.setValue(event);
  },[helper])

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <TextField
        id={field.name}
        name={field.name}
        value={field.value}
        error={meta.touched && Boolean(meta.error)}
        onChange={handleOnChange}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" />
    </div>
  );
};
