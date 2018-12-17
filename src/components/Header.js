import React from 'react';
// import { NavLink } from 'react-router-dom';

import '../sass/main.scss';
import Logo from './../img/tokyo.jpg';


const Header = (props) => {
    return (
    
    <header className="header">
      
        <img className="header__logo" src={Logo} alt="logo" />
        {/* <NavLink className="header__title" to="/home" activeClassName="header__link-active" exact={true}>Tokyo Ramen</NavLink>
        <NavLink className="header__link" to="/about" activeClassName="header__link-active" exact={true}>About</NavLink>
        <NavLink className="header__link" to="/menu" activeClassName="header__link-active">Menu</NavLink>
        <NavLink className="header__link" to="/locations" activeClassName="header__link-active">Locations</NavLink>
        <NavLink className="header__link" to="/contact" activeClassName="header__link-active">Contact</NavLink>
        <NavLink className="header__link" to="/orderonline" activeClassName="header__link-active">Order Online</NavLink> */}
        <a onClick={props.showHome} className="header__link">Tokyo Ramen</a>
        <a onClick={props.showAbout} className="header__link">About</a>
        <a onClick={props.showMenu} className="header__link">Menu</a>
        <a onClick={props.showLocations} className="header__link">Locations</a>
        <a onClick={props.showContact} className="header__link">Contact</a>
        <a onClick={props.showOrderOnline} className="header__link">Order Online</a>

        <div className="header__right">
            <div className="header__social">
                <a href="https://www.twitter.com/" className="header__social--link"><i className="fa fa-twitter-square header__social--icon"></i></a>
                <a href="https://www.instagram.com/" className="header__social--link"><i className="fa fa-instagram header__social--icon"></i></a>
                <a href="https://www.yelp.com/" className="header__social--link"><i className="fa fa-yelp header__social--icon"></i></a>
                
            </div>
            <div className="header__social--address">@tokyoramen</div>
        </div>
    </header>
    );
}

export default Header;