import { useCallback } from "react";
import { useField, ErrorMessage } from "formik";
import { InlineError, TextField } from "@shopify/polaris";
import "./input.css";

export const Input = ({ name, label, ...props }) => {
  const [field, meta, helper] = useField(name);

  const handleOnChange = useCallback(
    (event) => {
      helper.setValue(event);
    },
    [helper]
  );
  return (
    <div className="input">
      <label htmlFor={field.name}>{label}</label>
      <TextField
        id={field.name}
        name={field.name}
        value={field.value}
        error={meta.error && meta.touched ? meta.error : null}
        onChange={handleOnChange}
        {...props}
      />

      <InlineError>
        <ErrorMessage name={field.name} component="div" />
      </InlineError>
    </div>
  );
};
