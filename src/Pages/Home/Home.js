import React, { useEffect } from "react";
import { Card, Layout, Page, Button } from "@shopify/polaris";
import { Link } from "react-router-dom";
import "./home.css";
import { useHistory } from "react-router-dom";
import { Navbar } from "../../Componet/NavBar/NabBar";

export const Home = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/doshboard");
    }
  });
  return (
    <div>
      <Navbar />
      <Page narrowWidth>
        <Layout sectioned>
          <Card title="You have to login or create an account" sectioned>
            <h1>
              <strong>
                If you want to create an account click to Register
              </strong>
            </h1>
            <Link to="/register" className="navlink">
              <div className="button">
                <Button monochrome outline>
                  Register
                </Button>
              </div>
            </Link>
            <h1>
              <strong>If you already have an account click to Login</strong>
            </h1>
            <Link to="/login" className="navlink">
              <div className="button">
                <Button monochrome outline>
                  Login
                </Button>
              </div>
            </Link>
          </Card>
        </Layout>
      </Page>
    </div>
  );
};
