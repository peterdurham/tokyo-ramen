import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../sass/main.scss";

class MenuPage extends Component {
  state = {
    selected: "Ramen"
  };

  selectMenuOption = option => {
    this.setState(() => ({ selected: option }));
  };

  render() {
    let ramen =
      this.state.selected === "Ramen" ? (
        <div className="menu__ramen">
          <div className="menu__ramen--header">Ramen</div>
          <div className="menu__ramen--1 menu__ramen--selection">
            <div className="menu__ramen--title">Miso</div>
            <div className="menu__ramen--text">
              served w/ soft-boiled egg, nori, spring onion, shiitake mushrooms,
              and bean spouts
            </div>
          </div>
          <div className="menu__ramen--2 menu__ramen--selection">
            <div className="menu__ramen--title">Shoyu</div>
            <div className="menu__ramen--text">
              [chicken & shoyu broth] served w/ soft-boiled egg, nori, marinated
              shiitake mushrooms, spring onions, and bean sprouts
            </div>
          </div>
          <div className="menu__ramen--3 menu__ramen--selection">
            <div className="menu__ramen--title">Tonkotsu</div>
            <div className="menu__ramen--text">
              (pork bone broth) served soft-boiled egg, nori, marinated shiitake
              mushrooms, spring onions, and bean sprouts
            </div>
          </div>
          <div className="menu__ramen--4 menu__ramen--selection">
            <div className="menu__ramen--title">Tantamen</div>
            <div className="menu__ramen--text">
              shoyu broth with miso paste, spicy ground pork, soft-boiled egg,
              nori, marinated shiitake mushrooms, spring onions, and bean
              sprouts
            </div>
          </div>
          <div className="menu__ramen--addons">
            <div className="menu__ramen--header">Addons</div>
            <div className="menu__ramen--addon">Add Pork Belly</div>
            <div className="menu__ramen--addon">Add Beef</div>
            <div className="menu__ramen--addon">Add Tofu</div>
            <div className="menu__ramen--addon">Extra Broth</div>
            <div className="menu__ramen--addon">Extra Noodles</div>
            <div className="menu__ramen--addon">Add Soft Boiled Egg</div>
            <div className="menu__ramen--addon">Add Green Onions</div>
            <div className="menu__ramen--addon">Add Nori</div>
          </div>
        </div>
      ) : null;

    let drinks =
      this.state.selected === "Drinks" ? (
        <div className="menu__drinks">
          <div className="menu__beer">
            <div className="menu__beer--header">Beer</div>
            <div className="menu__beer--1 menu__beer--selection">
              <div className="menu__beer--title">Suiyobi No Neko</div>
              <div className="menu__beer--text">
                Belgian White Ale, 5% ABV, 11.8oz
              </div>
            </div>
            <div className="menu__beer--2 menu__beer--selection">
              <div className="menu__beer--title">Olgero Icelandic</div>
              <div className="menu__beer--text">White Ale, 5.2% ABV, 330ml</div>
            </div>
            <div className="menu__beer--3 menu__beer--selection">
              <div className="menu__beer--title">Sapporo</div>
              <div className="menu__beer--text">
                Japanese Pale Lager, 4.9% ABV, 20.3oz
              </div>
            </div>
            <div className="menu__beer--4 menu__beer--selection">
              <div className="menu__beer--title">Sorry Umami</div>
              <div className="menu__beer--text">IPA, 6.5% ABV, 11.8oz</div>
            </div>
            <div className="menu__beer--5 menu__beer--selection">
              <div className="menu__beer--title">Hop Nosh</div>
              <div className="menu__beer--text">
                Tangerine IPA, 7.3% ABV, 12oz
              </div>
            </div>
          </div>
          <div className="menu__sake">
            <div className="menu__sake--header">Sake</div>
            <div className="menu__sake--1 menu__sake--selection">
              <div className="menu__sake--title">Nihonsakari Daiginjo</div>
              <div className="menu__sake--text">
                Hyogo, Alcohol Level 16-17%, *SMV 5
              </div>
            </div>
            <div className="menu__sake--2 menu__sake--selection">
              <div className="menu__sake--title">
                Kikumasamune Kimoto Daiginjo
              </div>
              <div className="menu__sake--text">
                Hyogo, Alcohol Level 15-16%, *SMV 3.5
              </div>
            </div>
            <div className="menu__sake--3 menu__sake--selection">
              <div className="menu__sake--title">Kanchiku Junmai Daiginjo</div>
              <div className="menu__sake--text">
                Nagano, Alcohol Level 15-16%, *SMV 3
              </div>
            </div>
            <div className="menu__sake--4 menu__sake--selection">
              <div className="menu__sake--title">
                Amabuki Ginnno Kurenai Junmai
              </div>
              <div className="menu__sake--text">
                Saga, Alcohol Level 15%, *SMV 2
              </div>
            </div>
          </div>
        </div>
      ) : null;

    let appetizers =
      this.state.selected === "Appetizers" ? (
        <div className="menu__app">
          <div className="menu__app--header">Appetizers</div>
          <div className="menu__app--1 menu__app--selection">
            <div className="menu__app--title">Miso Soup</div>
            <div className="menu__app--text">wakame, fresh tofu, scallion</div>
          </div>
          <div className="menu__app--2 menu__app--selection">
            <div className="menu__app--title">Edamame</div>
            <div className="menu__app--text">organic soybeans w/ shio</div>
          </div>
          <div className="menu__app--3 menu__app--selection">
            <div className="menu__app--title">Yakitori</div>
            <div className="menu__app--text">
              chicken skewered and grilled topped off with teriyaki sauce
            </div>
          </div>
          <div className="menu__app--4 menu__app--selection">
            <div className="menu__app--title">Gyoza</div>
            <div className="menu__app--text">
              dumplings of pork, ginger, garlic
            </div>
          </div>
          <div className="menu__app--5 menu__app--selection">
            <div className="menu__app--title">Takoyaki</div>
            <div className="menu__app--text">
              Octopus, Bonito Flakes, Takoyaki Sauce
            </div>
          </div>
          <div className="menu__app--6 menu__app--selection">
            <div className="menu__app--title">Kara Age Chicken</div>
            <div className="menu__app--text">
              Fried Chicken, Shishito Pepper with Spicy Garlic Mayonnaise
            </div>
          </div>
        </div>
      ) : null;

    let desserts =
      this.state.selected === "Desserts" ? (
        <div className="menu__desserts">
          <div className="menu__desserts--header">Desserts</div>
          <div className="menu__desserts--1 menu__desserts--selection">
            <div className="menu__desserts--title">Mochi Ice Cream</div>
            <div className="menu__desserts--text">
              Green Tea, Chocolate, Pistachio
            </div>
          </div>
          <div className="menu__desserts--2 menu__desserts--selection">
            <div className="menu__desserts--title">Panna Cotta</div>
            <div className="menu__desserts--text">
              homemade panna cotta, w/ caramel cream sauce, graham cracker,
              vanilla ice cream
            </div>
          </div>
          <div className="menu__desserts--3 menu__desserts--selection">
            <div className="menu__desserts--title">Japanese Cheesecake</div>
            <div className="menu__desserts--text">
              New York Style, Mango, Green Tea, Chocolate
            </div>
          </div>
          <div className="menu__desserts--4 menu__desserts--selection">
            <div className="menu__desserts--title">Monburan Cake</div>
            <div className="menu__desserts--text">
              A soft layer of sponge cake surrounding a pillowy mound of whipped
              cream.
            </div>
          </div>
        </div>
      ) : null;

    let ramenBackground =
      this.state.selected === "Ramen" ? (
        <div className="menu__background--ramen" />
      ) : null;

    let appetizersBackground =
      this.state.selected === "Appetizers" ? (
        <div className="menu__background--appetizers" />
      ) : null;

    let drinksBackground =
      this.state.selected === "Drinks" ? (
        <div className="menu__background--drinks" />
      ) : null;

    let dessertsBackground =
      this.state.selected === "Desserts" ? (
        <div className="menu__background--desserts" />
      ) : null;

    return (
      <div>
        <div className="menu">
          <div className="menu__sidebar">
            <div
              className={
                this.state.selected === "Ramen"
                  ? "menu__link menu__link--selected"
                  : "menu__link"
              }
              onClick={() => this.selectMenuOption("Ramen")}
            >
              Ramen
            </div>
            <div
              className={
                this.state.selected === "Appetizers"
                  ? "menu__link menu__link--selected"
                  : "menu__link"
              }
              onClick={() => this.selectMenuOption("Appetizers")}
            >
              Appetizers
            </div>
            <div
              className={
                this.state.selected === "Drinks"
                  ? "menu__link menu__link--selected"
                  : "menu__link"
              }
              onClick={() => this.selectMenuOption("Drinks")}
            >
              Drinks
            </div>
            <div
              className={
                this.state.selected === "Desserts"
                  ? "menu__link menu__link--selected"
                  : "menu__link"
              }
              onClick={() => this.selectMenuOption("Desserts")}
            >
              Dessert
            </div>
          </div>
          <div className="menu__content">
            {ramen}
            {appetizers}
            {drinks}
            {desserts}
          </div>
        </div>
        <div className="menu__button--back">
          <NavLink
            className="menu__button"
            to="/orderonline"
            activeClassName="is-active"
          >
            Order Online
          </NavLink>
        </div>
        {ramenBackground}
        {appetizersBackground}
        {drinksBackground}
        {dessertsBackground}
      </div>
    );
  }
}

export default MenuPage;
