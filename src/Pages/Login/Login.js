import React from "react";
import { Formik, Form } from "formik";
import "./Login.css";
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
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={Validation}
        >
          {() => {
            return (
              <Form>
                <Input name="email" label="Email" />
                <Input name="password" label="Password" type="password" />
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
