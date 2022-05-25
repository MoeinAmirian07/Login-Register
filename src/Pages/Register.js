import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { Card } from "@shopify/polaris";
import CountrySelector from "../Componet/CountrySelector";

let newValues;

const Register = () => {
  const handleSubmit = (values) => {
    newValues = values;
    alert(JSON.stringify(values, null, 2));
  };
  const RegisterValidation = object().shape({
    name: string().required("Required"),
    email: string()
      .required("Valid email required")
      .email("Valid email required"),
    password: string().min(8, "Required").required("Required"),
    confirmPassword: string()
      .required("Please confirm your password")
      .oneOf([ref("password")], "Passwords do not match"),
  });

  const Input = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return (
      <div>
        <label htmlFor={field.name}>{label}</label>
        <input {...field} {...props} />
        <ErrorMessage name={field.name} component="div" />
      </div>
    );
  };

  const CountryHandler = (country) => {
    newValues = { ...newValues, country };
  };

  return (
    <div>
      <Card title="Registration Form" sectioned>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={RegisterValidation}
        >
          {() => {
            return (
              <Form>
                <Input name="name" label="Name" />
                <Input name="email" label="Email" />
                <Input name="password" label="Password" type="password" />
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
                <CountrySelector CountryHandler={CountryHandler} />
                <div>
                  <button type="submit">Register</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
};

export default Register;
