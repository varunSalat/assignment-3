import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/global.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Layout from "./layout/Layout";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about-us">
            <AboutPage />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
