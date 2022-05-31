import React from "react";
import { Formik, Form } from "formik";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { validation } from "./validation";
import { Input } from "../../Componet/Input/Input";
import { initialValues } from "./initialValues";
import "./Login.css";

export const Login = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Page title="Login Form" narrowWidth={true}>
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
                  <Input name="email" label="Email" />
                  <Input name="password" label="Password" type="password" />
                  <div className="submit-btn">
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
  );
};
