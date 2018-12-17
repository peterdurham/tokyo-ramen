import React from 'react';
// import { NavLink } from 'react-router-dom';

import '../sass/main.scss';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer__copyright">Copyright &#9400; 2018 Tokyo Ramen</div>
            {/* <NavLink className="footer__link" to="/about" activeClassName="is-active" exact={true}>About</NavLink>
            <NavLink className="footer__link" to="/menu" activeClassName="is-active">Menu</NavLink>
            <NavLink className="footer__link" to="/locations" activeClassName="is-active">Locations</NavLink>
            <NavLink className="footer__link" to="/contact" activeClassName="is-active">Contact</NavLink>
            <NavLink className="footer__link" to="/orderonline" activeClassName="is-active">Order Online</NavLink> */}
            
            <a className="footer__link" onClick={props.showAbout}>About</a>
            <a className="footer__link" onClick={props.showMenu}>Menu</a>
            <a className="footer__link" onClick={props.showLocations}>Locations</a>
            <a className="footer__link" onClick={props.showContact}>Contact</a>
            <a className="footer__link" onClick={props.showOrderOnline}>Order Online</a>
        </div>
    );
}

export default Footer;