import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import MenuPage from '../components/MenuPage';
import LocationsPage from '../components/LocationsPage';
import ContactPage from '../components/ContactPage';
import OrderOnlinePage from '../components/OrderOnlinePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    
    <BrowserRouter >
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route path="/menu" component={MenuPage} />
                <Route path="/locations" component={LocationsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/orderonline" component={OrderOnlinePage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
   
);

export default AppRouter;
