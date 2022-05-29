import React from "react";
import { Formik, Form } from "formik";
import CountrySelector from "./CountrySelector";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { Validation } from "./Validation";
import { Input } from "../../Componet/Input/Input";
import InitialValues from "./InitialValues";
import "./Register.css";

let country;
const Register = () => {
  const handleSubmit = (values) => {
    values.country = country;
    alert(JSON.stringify(values, null, 2));
  };
  const countryHandler = (selected) => {
    country = selected;
  };

  return (
    <div>
      <Page title="Register Form" narrowWidth={true}>
        <Layout sectioned={true}>
          <Card sectioned>
            <Formik
              initialValues={InitialValues}
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
                    <CountrySelector onChangeHandler={countryHandler} />
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

export default Register;
