import React from "react";
import { Formik, Form } from "formik";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { validation } from "./validation";
import { Input } from "../../Componet/Input/Input";
import { initialValues } from "./initialValues";
import "./login.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const switchPage = (values) => {
    alert(JSON.stringify(values, null, 2));
    history.push("/doshboard");
  };

  return (
    <Page title="Login Form" narrowWidth>
      <Layout sectioned>
        <Card sectioned>
          <Formik
            initialValues={initialValues}
            onSubmit={switchPage}
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
