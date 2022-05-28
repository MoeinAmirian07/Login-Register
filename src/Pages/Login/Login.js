import React from "react";
import { Formik, Form } from "formik";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { Validation } from "./Validation";
import { Input } from "../../Componet/Input/Input";
import InitialValues from "./InitialValues";
import "./Login.css";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Page title="Login Form" narrowWidth={true}>
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

export default Register;
