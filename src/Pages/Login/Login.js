import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { validation } from "./validation";
import { Input } from "../../Componet/Input/Input";
import { initialValues } from "./initialValues";
import "./login.css";
import { useHistory } from "react-router-dom";
import { Navbar } from "../../Componet/NavBar/NabBar";

export const Login = () => {
  const history = useHistory();
  const switchPage = (values) => {
    localStorage.setItem("token", "*8cdvbJFk!*TVZarKLh");
    alert(JSON.stringify(values, null, 2));
    history.push("/doshboard");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/doshboard");
    }
  });
  return (
    <div>
      <Navbar />
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
    </div>
  );
};
