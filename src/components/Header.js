import React from "react";
import { NavLink } from "react-router-dom";

import "../sass/main.scss";
import Logo from "./../img/tokyo.jpg";
import MobileOpen from '../img/icons/mobile-open.svg'
import MobileClose from '../img/icons/mobile-close.svg'

class Header extends React.Component {
  state = {
    mobileOpen: false,
  }

  toggleMobileDrawer = () => {
    console.log('CLICKED')
      this.setState({mobileOpen: !this.state.mobileOpen})
  }
  render() {
    return (
      <header className="header">
      <div className="header__logo--container">
        <img className="header__logo" src={Logo} alt="logo" />
        <NavLink
          className="header__title"
          to="/home"
          activeClassName="header__link-active"
          exact={true}
        >
          Tokyo Ramen
        </NavLink>
        </div>
        <NavLink
          className="header__link"
          to="/about"
          activeClassName="header__link-active"
          exact={true}
        >
          About
        </NavLink>
        <NavLink
          className="header__link"
          to="/menu"
          activeClassName="header__link-active"
        >
          Menu
        </NavLink>
        <NavLink
          className="header__link"
          to="/locations"
          activeClassName="header__link-active"
        >
          Locations
        </NavLink>
        <NavLink
          className="header__link"
          to="/contact"
          activeClassName="header__link-active"
        >
          Contact
        </NavLink>
        <NavLink
          className="header__link"
          to="/orderonline"
          activeClassName="header__link-active"
        >
          Order Online
        </NavLink>

        <div className="header__right">
          <div className="header__social">
            <a href="https://www.twitter.com/" className="header__social--link">
              <i className="fa fa-twitter-square header__social--icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="header__social--link"
            >
              <i className="fa fa-instagram header__social--icon" />
            </a>
            <a href="https://www.yelp.com/" className="header__social--link">
              <i className="fa fa-yelp header__social--icon" />
            </a>
          </div>
          <div className="header__social--address">@tokyoramen</div>
        </div>

        {this.state.mobileOpen ? (<div className="header__mobile--close" onClick={this.toggleMobileDrawer}>
            <img src={MobileClose} alt="close button"/>
        </div>) : ( <div className="header__mobile--open" onClick={this.toggleMobileDrawer}>
            <img src={MobileOpen} alt="open button" />
        </div>)}
       


        
        {this.state.mobileOpen && <div className="header__mobile--drawer">
        <div className="header__right--mobile">
          <div className="header__social--mobile">
            <a href="https://www.twitter.com/" className="header__social--link--mobile">
              <i className="fa fa-twitter-square header__social--icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="header__social--link--mobile"
            >
              <i className="fa fa-instagram header__social--icon" />
            </a>
            <a href="https://www.yelp.com/" className="header__social--link--mobile">
              <i className="fa fa-yelp header__social--icon" />
            </a>
          </div>
          <div className="header__social--address--mobile">@tokyoramen</div>
        </div>
        <div className="header__mobile--links">
        <NavLink
          className="header__mobile--link"
          to="/home"
          activeClassName="header__link-active"
          exact={true}
          onClick={this.toggleMobileDrawer}
        >
          Home
        </NavLink>
        <NavLink
          className="header__mobile--link"
          to="/about"
          activeClassName="header__link-active"
          exact={true}
          onClick={this.toggleMobileDrawer}
        >
          About
        </NavLink>
        <NavLink
          className="header__mobile--link"
          to="/menu"
          activeClassName="header__link-active"
          onClick={this.toggleMobileDrawer}
        >
          Menu
        </NavLink>
        <NavLink
          className="header__mobile--link"
          to="/locations"
          activeClassName="header__link-active"
          onClick={this.toggleMobileDrawer}
        >
          Locations
        </NavLink>
        <NavLink
          className="header__mobile--link"
          to="/contact"
          activeClassName="header__link-active"
          onClick={this.toggleMobileDrawer}
        >
          Contact
        </NavLink>
        <NavLink
          className="header__mobile--link"
          to="/orderonline"
          activeClassName="header__link-active"
          onClick={this.toggleMobileDrawer}
        >
          Order Online
        </NavLink></div>
        </div> }
        
      </header>
    );
  }
}

export default Header;
