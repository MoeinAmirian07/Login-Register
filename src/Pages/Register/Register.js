import React from "react";
import { Formik, Form } from "formik";
import CountrySelector from "./CountrySelector";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { Validation } from "./Validation";
import { Input } from "../../Componet/Input/Input";
import InitialValues from "./InitialValues"

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
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
                    <CountrySelector />
                    <br></br>
                    <div style={{ color: "rgb(197, 46, 104)" }}>
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
