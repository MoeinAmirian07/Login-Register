import { Card, Layout, Page, Button } from "@shopify/polaris";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Page narrowWidth={true}>
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
