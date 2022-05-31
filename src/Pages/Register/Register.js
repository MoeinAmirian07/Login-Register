import React from "react";
import { Formik, Form } from "formik";
import { CountrySelector } from "../../Componet/countrySelector";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { validation } from "./validation";
import { Input } from "../../Componet/Input/Input";
import { initialValues } from "./initialValues";

import "./Register.css";
export const Register = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    values.country = "";
  };

  return (
    <div>
      <Page title="Register Form" narrowWidth={true}>
        <Layout sectioned={true}>
          <Card sectioned>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validation}
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
                    <CountrySelector name="country" label="Country" />
                    <div className="submit-btn">
                      <Button monochrome outline submit>
                        Register
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Layout>
      </Page>
    </div>
  );
};
