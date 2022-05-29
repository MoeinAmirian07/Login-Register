import { object, string, ref } from "yup";
import { InlineError } from "@shopify/polaris";

export const Validation = object().shape({
  name: string().required(<InlineError message="Required" fieldId="name" />),
  email: string()
    .required(
      <InlineError message="Valid email required" fieldId="emailRequired" />
    )
    .email(<InlineError message="Valid email required" fieldId="email" />),
  password: string()
    .min(8, <InlineError message="Too short" fieldId="password" />)
    .required(<InlineError message="Required" fieldId="passwordRequired" />),
  confirmPassword: string()
    .required(
      <InlineError
        message="Please confirm your password"
        fieldId="requiredConfirm"
      />
    )
    .oneOf(
      [ref("password")],
      <InlineError
        message="Passwords does not match"
        fieldId="notMatchPassword"
      />
    ),
});
