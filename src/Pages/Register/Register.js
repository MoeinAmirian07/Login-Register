import React, { useState } from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import CountrySelector from "./CountrySelector";
import "./Register.css";
import { Card, Button } from "@shopify/polaris";
import { Validation } from "./Validation";
import { Input } from "./Input";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="register">
      <Card sectioned>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={Validation}
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
                <CountrySelector />
                <br></br>
                <div className="button">
                  <Button monochrome outline submit>
                    Register
                  </Button>
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
