import React from "react";
import "../styles/contactUs.css";
function ContactUs() {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          We would love to hear from you! Please fill out the form below and we
          will get in touch with you as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
