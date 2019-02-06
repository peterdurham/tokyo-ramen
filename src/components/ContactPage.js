import React, { Component } from "react";

import "../sass/main.scss";

class ContactPage extends Component {
  submitContactForm = () => alert("Not a real restaurant, sorry!");

  render() {
    return (
      <div>
        <div className="contact__header">Contact Us</div>
        <form className="contact__form">
          <div className="contact__text">
            If you have questions or comments, please use the contact form.
          </div>
          <div className="contact__subtext">* Required</div>
          <label htmlFor="yourname" className="contact__label">
            Your Name <span className="contact__input--span">*</span>
          </label>
          <input type="text" name="yourname" className="contact__input" />
          <label htmlFor="email" className="contact__label">
            Email <span className="contact__input--span">*</span>
          </label>
          <input type="text" name="email" className="contact__input" />
          <label htmlFor="phone" className="contact__label">
            Phone Number
          </label>
          <input type="text" name="phone" className="contact__input" />
          <label htmlFor="subject" className="contact__label">
            Subject <span className="contact__input--span">*</span>
          </label>
          <input type="text" name="subject" className="contact__input" />
          <label htmlFor="message" className="contact__label">
            Your Message <span className="contact__input--span">*</span>
          </label>
          <textarea
            name="message"
            className="contact__input contact__input--textarea"
          />
          <button className="contact__button" onClick={this.submitContactForm}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
