import React from "react";
import "./Info.css";


const Info = () => {
    
  return (
    
    <div className="info-wrap">
      {/* Top Tabs */}
      <nav className="info-tabs">
        <a href="#about">About Us</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </nav>

      {/* About Section */}
      <section id="about" className="info-section">
        <h2>About Us</h2>
        <p>
          <strong>BlueBasket</strong> is your go-to destination for quality products at
          honest prices. We curate trending styles and essentials with fast delivery
          and easy returns.
        </p>
        <p>
          Our mission is simple: <strong>great value, zero hassle.</strong>
        </p>
      </section>

      {/* Careers Section */}
      <section id="careers" className="info-section">
        <h2>Careers</h2>
        <p>
          We’re a product-first team that ships fast. If you love design, code, or
          customer delight, we want you!
        </p>
        <p>
          Send your resume to <a href="mailto:careers@bluebasket.com">careers@bluebasket.com</a>
        </p>
        <ul>
          <li>Frontend Engineer (React)</li>
          <li>UI/UX Designer</li>
          <li>Operations & Logistics Associate</li>
          <li>Customer Success Specialist</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="info-section">
        <h2>Contact</h2>
        <p>We’d love to hear from you!</p>
        <div className="contact-grid">
          <div>
            <h4>Email</h4>
            <a href="mailto:support@bluebasket.com">support@bluebasket.com</a>
          </div>
          <div>
            <h4>Phone</h4>
            <a href="tel:+911234567890">+91 12345 67890</a>
          </div>
          <div>
            <h4>Address</h4>
            <p>BlueBasket HQ, Bengaluru, India</p>
          </div>
        </div>

        {/* Simple Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea rows="4" placeholder="Message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="info-section">
        <h2>Privacy Policy</h2>
        <p>
          At BlueBasket, we respect your privacy. We only collect data needed to
          improve your experience, like preferences and order details. We never sell
          your data to third parties.
        </p>
        <p>
          You can contact us anytime to know what data we hold about you or to request
          deletion of your data.
        </p>
        <h2>Thanks !!</h2>
      </section>
    </div>
  );
};

export default Info;
