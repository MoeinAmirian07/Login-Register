import * as Yup from "yup";
import {InlineError} from '@shopify/polaris';

export const Validation = Yup.object().shape({
  password: Yup.string()
    .min(8, <InlineError message="Too Short" fieldId="2Short"/>)
    .max(50, <InlineError message="Too Long" fieldId="2Long"/>)
    .required(<InlineError message="Required" fieldId="passwordRequired"/>),
  email: Yup.string().email(<InlineError message="Invalid email" fieldId="invalidEmail" />).required(<InlineError message="Required" fieldId="emailRequired" />),
});
