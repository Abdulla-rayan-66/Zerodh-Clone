import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="text-center fs-3">
          We pioneer the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 mb-5 border-top fs-5 text-muted">
        <div className="col px-4 py-3">
          <p className="mb-5">
            Zerodha is built on the belief that investing should be simple,
            transparent, and accessible to everyone.
          </p>
          <p className="mb-5">
            Our technology helps millions of Indians participate in the markets
            with confidence while keeping costs low.
          </p>
          <p className="mb-0">
            We make investing accessible through simple and reliable products.
          </p>
        </div>
        <div className="col px-4 py-3">
          <p className="mb-5">
            We continue to innovate and build products that make investing and
            trading easier for our customers.
          </p>
          <p className="mb-5">
            Our products are designed to make every market experience clear and
            convenient.
          </p>
          <p className="mb-0">
            We remain focused on helping our customers invest with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
