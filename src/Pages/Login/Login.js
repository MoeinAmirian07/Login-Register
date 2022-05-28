import React from "react";
import { Formik, Form } from "formik";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { Validation } from "./Validation";
import { Input } from "../../Componet/Input";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
      <Page title="Login Form" narrowWidth={true}>
        <Layout sectioned={true}>
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
                    
                      <Button primary monochrome outline submit>
                        Login
                      </Button>
                    
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Layout>
      </Page>
  );
};

export default Register;
