import React from "react";

function Stats() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-5">Trust with confidence</h1>

          <h2 className="mb-2">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="mb-2">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimicks, spam,"gamification", or annoying push notifications.
            High quality apps that make use at your pace,the way you like.
          </p>

          <h2 className="mb-2">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app but a whole ecosystem. Our 30+ finfintches offer you
            tailored services specific to your needs.
          </p>

          <h2 className="mb-2">Do better with money</h2>
          <p className="text-muted">
            We believe in empowering you to make better financial decisions. Our
            products and services are designed to help you do just that.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media\images\ecosystem.png"
            alt="Zerodha Ecosystem"
            style={{ width: "80%" }}
          />
          <div className="text-center">
            <a href="" className="mr-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try kite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
