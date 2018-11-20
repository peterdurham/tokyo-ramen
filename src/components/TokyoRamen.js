import React, {Component} from 'react';

import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import LocationsPage from './LocationsPage';
import ContactPage from './ContactPage';
import OrderOnlinePage from './OrderOnlinePage';

class TokyoRamen extends Component {
    state = {
        displayHomePage: true,
        displayAboutPage: false,
        displayMenuPage: false,
        displayLocationsPage: false,
        displayContactPage: false,
        displayOrderOnlinePage: false,
    }

    showHomeHandler = () => {
        this.setState(()=>({
            displayHomePage: true,
            displayAboutPage: false,
            displayMenuPage: false,
            displayLocationsPage: false,
            displayContactPage: false,
            displayOrderOnlinePage: false,
        }))
    }
    showAboutHandler = () => {
        this.setState(()=>({
            displayHomePage: false,
            displayAboutPage: true,
            displayMenuPage: false,
            displayLocationsPage: false,
            displayContactPage: false,
            displayOrderOnlinePage: false,
        }))
    }
    showMenuHandler = () => {
        this.setState(()=>({
            displayHomePage: false,
            displayAboutPage: false,
            displayMenuPage: true,
            displayLocationsPage: false,
            displayContactPage: false,
            displayOrderOnlinePage: false,
        }))
    }
    showLocationsHandler = () => {
        this.setState(()=>({
            displayHomePage: false,
            displayAboutPage: false,
            displayMenuPage: false,
            displayLocationsPage: true,
            displayContactPage: false,
            displayOrderOnlinePage: false,
        }))
    }
    showContactHandler = () => {
        this.setState(()=>({
            displayHomePage: false,
            displayAboutPage: false,
            displayMenuPage: false,
            displayLocationsPage: false,
            displayContactPage: true,
            displayOrderOnlinePage: false,
        }))
    }
    showOrderOnlineHandler = () => {
        this.setState(()=>({
            displayHomePage: false,
            displayAboutPage: false,
            displayMenuPage: false,
            displayLocationsPage: false,
            displayContactPage: false,
            displayOrderOnlinePage: true,
        }))
    }
    
    render() {
        let home = (this.state.displayHomePage) ? <HomePage showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/> : null
        let about = (this.state.displayAboutPage) ? <AboutPage showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/> : null
        let menu = (this.state.displayMenuPage) ? <MenuPage showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/> : null
        let locations = (this.state.displayLocationsPage) ? <LocationsPage showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/> : null
        let contact = (this.state.displayContactPage) ? <ContactPage showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/> : null
        let orderonline = (this.state.displayOrderOnlinePage) ? <OrderOnlinePage showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/> : null

        return(
            <div>
                <Header showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/>
                {home}{about}{menu}{locations}{contact}{orderonline}
                <Footer showHome={this.showHomeHandler} showAbout={this.showAboutHandler} showMenu={this.showMenuHandler} showLocations={this.showLocationsHandler} showContact = {this.showContactHandler} showOrderOnline = {this.showOrderOnlineHandler}/>
            </div>
        );
    }
}

export default TokyoRamen;