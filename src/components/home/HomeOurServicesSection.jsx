import React from "react";

const HomeOurServicesSection = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-card">
          <div className="service-content">
            <h3>Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-content">
            <h3>Service 2</h3>
            <p>
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-content">
            <h3>Service 3</h3>
            <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOurServicesSection;
