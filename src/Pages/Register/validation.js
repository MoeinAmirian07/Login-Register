import { object, string, ref } from "yup";

export const validation = object().shape({
  name: string().required(),
  email: string().required().email(),
  password: string()
    .min(8)
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "your password dose not match"),
});
