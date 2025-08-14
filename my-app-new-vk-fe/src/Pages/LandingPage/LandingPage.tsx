import "./Landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to awesome starts here.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features-section">
        <div className="feature">
          <h3>Fast</h3>
          <p>Experience lightning fast performance.</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Your data is protected with top security.</p>
        </div>
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Designed with simplicity in mind.</p>
        </div>
      </section>
      <footer className="landing-footer">
        &copy; 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
