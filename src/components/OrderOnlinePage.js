import React, { Component } from "react";

import "../sass/main.scss";

class OrderOnlinePage extends Component {
  state = {
    locationSelected: null,
    order: [
      { key: 1, item: "Miso", amount: 0 },
      { key: 2, item: "Shoyu", amount: 0 },
      { key: 3, item: "Tonkotsu", amount: 0 },
      { key: 4, item: "Tantamen", amount: 0 },
      { key: 5, item: "Miso Soup", amount: 0 },
      { key: 6, item: "Edamame", amount: 0 },
      { key: 7, item: "Yakitori", amount: 0 },
      { key: 8, item: "Gyoza", amount: 0 },
      { key: 9, item: "Takoyaki", amount: 0 },
      { key: 10, item: "Kara Age Chicken", amount: 0 },
      { key: 11, item: "Suiyobi No Neko", amount: 0 },
      { key: 12, item: "Olgero Icelandic", amount: 0 },
      { key: 13, item: "Sapporo", amount: 0 },
      { key: 14, item: "Sorry Umami", amount: 0 },
      { key: 15, item: "Hop Nosh", amount: 0 },
      { key: 16, item: "Mochi Ice Cream", amount: 0 },
      { key: 17, item: "Panna Cotta", amount: 0 },
      { key: 18, item: "Japanese Cheesecake", amount: 0 },
      { key: 19, item: "Monburan Cake", amount: 0 }
    ],
    activeItems: []
  };

  selectLocation = location => {
    this.setState(() => ({ locationSelected: location }));
  };
  unselectLocation = () => {
    this.setState(() => ({ locationSelected: null }));
  };
  addToOrder = itemToAdd => {
    let order = Object.assign([], this.state.order);
    let updated = order.map((obj, index) => {
      if (obj.item === itemToAdd) {
        obj.amount += 1;
        return obj;
      } else {
        return obj;
      }
    });
    let filtered = updated.filter(obj => obj.amount > 0);

    this.setState(() => ({ order: updated, activeItems: filtered }));
  };
  removeItem = itemToRemove => {
    let activeItems = Object.assign([], this.state.activeItems);
    let updated = activeItems.map(obj => {
      if (obj.item === itemToRemove && obj.amount > 0) {
        obj.amount -= 1;
        return obj;
      } else {
        return obj;
      }
    });
    this.setState(() => ({ activeItems: updated }));
  };

  render() {
    let selectLocation =
      this.state.locationSelected === null ? (
        <div className="orderonline__location">
          <div className="orderonline__location--text">
            Please Select Location
          </div>
          <div className="orderonline__location--buttons">
            <button
              className="orderonline__location--button"
              onClick={() => this.selectLocation("Shinjuku")}
            >
              Shinjuku
            </button>
            <button
              className="orderonline__location--button"
              onClick={() => this.selectLocation("Nippori")}
            >
              Nippori
            </button>
          </div>
        </div>
      ) : null;

    let order =
      this.state.locationSelected !== null ? (
        <div>
          <div
            className="orderonline__location--details"
            onClick={this.unselectLocation}
          >
            Order Online <span className="red">>></span>{" "}
            {this.state.locationSelected}
          </div>

          <div className="orderonline__menu">
            <div className="orderonline__menu--left">
              <div className="orderonline__menu--title">Ramen</div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Miso")}
                >
                  +
                </button>{" "}
                Miso
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Shoyu")}
                >
                  +
                </button>{" "}
                Shoyu
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Tonkotsu")}
                >
                  +
                </button>{" "}
                Tonkotsu
              </div>
              <div className="orderonline__menu--option option-last">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Tantamen")}
                >
                  +
                </button>{" "}
                Tantamen
              </div>
              <div className="orderonline__menu--title">Appetizers</div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Miso Soup")}
                >
                  +
                </button>{" "}
                Miso Soup
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Edamame")}
                >
                  +
                </button>{" "}
                Edamame
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Yakitori")}
                >
                  +
                </button>{" "}
                Yakitori
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Gyoza")}
                >
                  +
                </button>{" "}
                Gyoza
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Takoyaki")}
                >
                  +
                </button>{" "}
                Takoyaki
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Kara Age Chicken")}
                >
                  +
                </button>{" "}
                Kara Age Chicken
              </div>
            </div>
            <div className="orderonline__menu--right">
              <div className="orderonline__menu--title">Drinks</div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Suiyobi No Neko")}
                >
                  +
                </button>{" "}
                Suiyobi No Neko
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Olgero Icelandic")}
                >
                  +
                </button>{" "}
                Olgero Icelandic
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Sapporo")}
                >
                  +
                </button>{" "}
                Sapporo
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Sorry Umami")}
                >
                  +
                </button>{" "}
                Sorry Umami
              </div>
              <div className="orderonline__menu--option option-last">
                <button className="orderonline__button">+</button> Hop Nosh
              </div>
              <div className="orderonline__menu--title">Desserts</div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Mochi Ice Cream")}
                >
                  +
                </button>{" "}
                Mochi Ice Cream
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Panna Cotta")}
                >
                  +
                </button>{" "}
                Panna Cotta
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Japanese Cheesecake")}
                >
                  +
                </button>{" "}
                Japanese Cheesecake
              </div>
              <div className="orderonline__menu--option">
                <button
                  className="orderonline__button"
                  onClick={() => this.addToOrder("Monburan Cake")}
                >
                  +
                </button>{" "}
                Monburan Cake
              </div>
            </div>
          </div>
        </div>
      ) : null;

    return (
      <div className="orderonline">
        <div className="orderonline__title">Online Ordering</div>
        <div className="orderonline__display">
          <div className="orderonline__image">
            {selectLocation}
            {order}
          </div>
          <div className="orderonline__order">
            <div className="orderonline__order--header">My Order</div>
            <div className="orderonline__order--label">
              <div>Item</div>
              <div>Quantity</div>
            </div>
            <div className="orderonline__items">
              {this.state.activeItems.map((obj, index) => (
                <OrderItem
                  name={obj.item}
                  amount={obj.amount}
                  removeItem={this.removeItem}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const OrderItem = props => {
  return (
    <div className="orderonline__item">
      <div className="orderonline__item--name">{props.name}</div>
      <div className="orderonline__item--amount">
        <div className="orderonline__item--amounttext">{props.amount}</div>
        <button
          className="orderonline__item--button"
          onClick={() => props.removeItem(props.name)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default OrderOnlinePage;
