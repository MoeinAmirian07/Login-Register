import { Card, Layout, Page, Button } from "@shopify/polaris";
const Home = () => {
  return (
    <Page narrowWidth={true}>
      <Layout sectioned>
        <Card title="You have to log in or create an account" sectioned>
          <h1 style={{ fontSize: "16px", padding: "6px" }}>
            {" "}
            <strong>If you want to create an account click to Register</strong>
          </h1>
          <Button sectioned outline>
            Register
          </Button>
          <br></br>
          <h1 style={{ fontSize: "16px", padding: "6px" }}>
            <strong>If you allready have an account click to Login</strong>
          </h1>
          <Button>login</Button>
        </Card>
      </Layout>
    </Page>
  );
};
export default Home;
