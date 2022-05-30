import * as Yup from "yup";

export const Validation = Yup.object().shape({
  password: Yup.string().min(8).max(50).required(),
  email: Yup.string().email().required(),
});
