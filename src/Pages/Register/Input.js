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
        error={meta.touched && Boolean(meta.error)}
        value={field.value}
        onChange={field.onChange}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};
