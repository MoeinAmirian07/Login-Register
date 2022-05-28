import { useField, ErrorMessage } from "formik";
import { TextField } from "@shopify/polaris";

export const Input = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <TextField
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={(e) => field.onChange(e.target.field.value)}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" />
    </div>
  );
};
