import React from "react";
import { Formik, Form } from "formik";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { Validation } from "./Validation";
import { Input } from "./Input";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
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
                    <br></br>
                    <div style={{ color: "rgb(197, 46, 104)" }}>
                      <Button monochrome outline submit>
                        Login
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
