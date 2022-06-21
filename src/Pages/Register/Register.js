import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { CountrySelector } from "../../Componet/CountrySelector/countrySelector";
import { Card, Button, Page, Layout } from "@shopify/polaris";
import { validation } from "./validation";
import { Input } from "../../Componet/Input/Input";
import { initialValues } from "./initialValues";
import { useHistory } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const history = useHistory();
  const switchPage = (values) => {
    localStorage.setItem("token", "*8cdvbJFk!*TVZarKLh");
    alert(JSON.stringify(values, null, 2));
    history.push("/doshboard");
    values.country = "";
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/doshboard");
    }
  });

  return (
    <div>
      <Page title="Register Form" narrowWidth>
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
