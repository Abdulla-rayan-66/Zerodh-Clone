import React from "react";

function Footer() {
  const anchorStyle = {
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "8px",
  };

  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <div class="container border-top mt-5">
        <div class="row mt-5">
          <div class="col">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "45%" }}
            />
            <p>
              {" "}
              &copy; 2010-2026,Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div class="col">
            <p>Company</p>
            <a href="#" style={anchorStyle}>
              About
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Pricing
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Support
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Accounts
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Careers
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Press
            </a>
          </div>
          <div class="col">
            <p>Support</p>
            <a href="#" style={anchorStyle}>
              Help Center
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Contact Us
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Feedback
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              FAQs
            </a>
          </div>
          <div class="col">
            <p>Accounts</p>
            <a href="#" style={anchorStyle}>
              Open Account
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Manage Account
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Account Settings
            </a>
            <br />
            <a href="#" style={anchorStyle}>
              Download App
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Invest with confidence and take meaningful steps toward building a
            stronger financial future. Explore simple tools, make informed
            decisions, and stay focused on your long-term goals with resources
            designed to support you at every stage of your investing journey.
            Our comprehensive platform provides real-time market data, advanced
            analytics, and personalized recommendations to help you navigate the
            complexities of modern investing. With our user-friendly interface
            and dedicated customer support team, you can manage your portfolio
            with ease and peace of mind. We believe that everyone deserves
            access to quality financial tools and education, regardless of their
            experience level. Whether you're saving for retirement, funding
            education, or building wealth, we're here to empower your financial
            decisions.
          </p>
          <p>
            Simple tools, helpful resources, and reliable support for every
            investor. Our platform combines cutting-edge technology with expert
            guidance.
          </p>
          <p>
            Whether you are just getting started or reviewing an established
            portfolio, take time to understand your goals, evaluate the risks,
            and choose investments that suit your needs. Education and
            transparency are at the core of everything we do. We provide
            detailed market analysis, research reports, and educational content
            to ensure you make informed decisions. Risk management tools and
            portfolio tracking features help you stay on top of your
            investments. Our team of financial experts is available to answer
            questions and provide guidance whenever you need it. We're committed
            to supporting your success and helping you achieve your financial
            objectives with confidence and clarity through every market cycle.
          </p>
          <p>
            Stay informed with market updates, educational guides, and practical
            insights to help you make thoughtful financial decisions.
          </p>
          <p>
            Investments are subject to market risks. Please read all related
            documents carefully before investing.
          </p>
          <p>
            This website is for educational and informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
