import React, { Component } from "react";

import "../sass/main.scss";
import { NavLink } from "react-router-dom";

import Food from "../img/food.jpg";
import Drinks from "../img/drinks.jpg";

import Modal from "./Modal";
import Gallery1 from "../img/gallery1.jpg";
import Gallery2 from "../img/gallery2.jpg";
import Gallery3 from "../img/gallery3.jpg";
import Gallery4 from "../img/gallery4.jpg";
import Gallery5 from "../img/gallery5.jpg";
import Gallery6 from "../img/gallery6.jpg";
import Gallery7 from "../img/gallery7.jpg";
import Gallery8 from "../img/gallery8.jpg";

class HomePage extends Component {
  state = {
    viewingImage: false,
    imageToView: null
  };
  viewImageHandler = imageToView => {
    this.setState({ viewingImage: true, imageToView });
  };
  closeImageHandler = () => {
    this.setState(() => ({ viewingImage: false }));
  };
  render() {
    let galleryImage;
    switch (this.state.imageToView) {
      case "Gallery 1":
        galleryImage = (
          <img src={Gallery1} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 2":
        galleryImage = (
          <img src={Gallery2} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 3":
        galleryImage = (
          <img src={Gallery3} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 4":
        galleryImage = (
          <img src={Gallery4} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 5":
        galleryImage = (
          <img src={Gallery5} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 6":
        galleryImage = (
          <img src={Gallery6} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 7":
        galleryImage = (
          <img src={Gallery7} className="modal__image" alt="viewed" />
        );
        break;
      case "Gallery 8":
        galleryImage = (
          <img src={Gallery8} className="modal__image" alt="viewed" />
        );
        break;
      default:
        break;
    }

    return (
      <div>
        <Modal
          show={this.state.viewingImage}
          modalClosed={this.closeImageHandler}
        >
          {galleryImage}
        </Modal>

        <section className="home__header">
          <div className="home__header--text">
            Try Authentic and Delicious Japanese Cuisine
          </div>
          <div className="home__header--subtext">
            Check out the Bar and Restaurant in Tokyo
          </div>
          <NavLink
            className="home__header--link"
            to="/contact"
            activeClassName="home__header--link-active"
          >
            Visit Tokyo Ramen
          </NavLink>
        </section>

        <section className="home__menu">
          <div className="home__menu--food">
            <div className="home__menu--text">Food</div>
            <NavLink
              className="home__fixed--menulink"
              to="/menu"
              activeClassName=""
            >
              <div className="home__menu--imagecontainer">
                <div className="home__menu--hovertext">
                  Delicious Ramen Bowls
                </div>
                <img className="home__menu--food-image" src={Food} alt="food" />
              </div>
            </NavLink>
          </div>
          <div className="home__menu--drinks">
            <div className="home__menu--text">Drinks</div>
            <NavLink
              className="home__fixed--menulink"
              to="/menu"
              activeClassName=""
            >
              <div className="home__menu--imagecontainer">
                <div className="home__menu--hovertext">
                  Tasty Drink Selection
                </div>
                <img
                  className="home__menu--drinks-image"
                  src={Drinks}
                  alt="drink"
                />
              </div>
            </NavLink>
          </div>
        </section>

        <section>
          <div className="home__fixed home__fixed--1">
            <div className="home__fixed--1-title">Tokyo Ramen</div>
            <br />
            <div className="home__fixed--1-text">
              Learn about the best Ramen Shop in Tokyo, open seven days a week.
            </div>
            <br />
            <NavLink
              className="home__fixed--1-navlink"
              to="/about"
              activeClassName=""
            >
              About
            </NavLink>
          </div>
          <div className="home__fixed home__fixed--2">
            <div className="home__fixed--2-title">Downtown Tokyo</div>
            <br />
            <div className="home__fixed--2-text">
              Visit one of our four locations in the heart of Tokyo city.
            </div>
            <br />
            <NavLink
              className="home__fixed--2-navlink"
              to="/locations"
              activeClassName=""
            >
              Locations
            </NavLink>
          </div>
        </section>

        <section className="home__gallery">
          <div className="home__gallery--title">Gallery</div>
          <div className="home__gallery--text">Click to view larger images</div>
          <div className="home__gallery--images">
            <div className="home__gallery--toprow">
              <img
                src={Gallery1}
                className="home__gallery--image"
                alt="gallery 1"
                onClick={() => this.viewImageHandler("Gallery 1")}
              />
              <img
                src={Gallery2}
                className="home__gallery--image"
                alt="gallery 2"
                onClick={() => this.viewImageHandler("Gallery 2")}
              />
              <img
                src={Gallery3}
                className="home__gallery--image"
                alt="gallery 3"
                onClick={() => this.viewImageHandler("Gallery 3")}
              />
              <img
                src={Gallery4}
                className="home__gallery--image"
                alt="gallery 4"
                onClick={() => this.viewImageHandler("Gallery 4")}
              />
            </div>
            <div className="home__gallery--bottomrow">
              <img
                src={Gallery5}
                className="home__gallery--image"
                alt="gallery 5"
                onClick={() => this.viewImageHandler("Gallery 5")}
              />
              <img
                src={Gallery6}
                className="home__gallery--image"
                alt="gallery 6"
                onClick={() => this.viewImageHandler("Gallery 6")}
              />
              <img
                src={Gallery7}
                className="home__gallery--image"
                alt="gallery 7"
                onClick={() => this.viewImageHandler("Gallery 7")}
              />
              <img
                src={Gallery8}
                className="home__gallery--image"
                alt="gallery 8"
                onClick={() => this.viewImageHandler("Gallery 8")}
              />
            </div>
          </div>
        </section>

        <section className="home__hours">
          <div className="home__hours--address">
            <i className="fa fa-map-marker" /> 2 Chome-9-7 Nishiikebukuro,
            Toshima-ku
          </div>
          <div className="home__hours--phone">
            <i className="fa fa-phone" /> +81 3-3981-5011
          </div>
          <table className="home__hours--table">
            <tbody>
              <tr>
                <td>
                  <span className="home__hours--day">Mon - Thu</span>
                </td>
                <td>
                  <span className="home__hours--time">11:30am - 11:30pm</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="home__hours--day">Fri</span>
                </td>
                <td>
                  <span className="home__hours--time">11:30am - 1:30am</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="home__hours--day">Sat</span>
                </td>
                <td>
                  <span className="home__hours--time">12:00pm - 1:30am</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="home__hours--day">Sun</span>
                </td>
                <td>
                  <span className="home__hours--time">12:00pm - 9:30pm</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default HomePage;
