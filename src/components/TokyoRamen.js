import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../sass/main.scss";
import Header from "./Header";
import Footer from "./Footer";

import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import MenuPage from "../components/MenuPage";
import LocationsPage from "../components/LocationsPage";
import ContactPage from "../components/ContactPage";
import OrderOnlinePage from "../components/OrderOnlinePage";
import ScrollToTop from "../components/ScrollToTop";

class TokyoRamen extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/menu" component={MenuPage} />
              <Route path="/locations" component={LocationsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/orderonline" component={OrderOnlinePage} />
            </Switch>

            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default TokyoRamen;
