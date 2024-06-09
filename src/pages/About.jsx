import React from "react";
import "../styles/aboutUs.css";
function AboutUsPage() {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </p>

        <h2>Our Mission</h2>
        <p>
          To provide the best services to our customers and ensure their
          satisfaction. Our team is dedicated to continuous improvement and
          innovation.
        </p>

        <h2>Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Team Member 1</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Team Member 2</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Team Member 3</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
