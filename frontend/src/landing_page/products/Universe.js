import React from "react";

function Universe() {
  const partners = [
    { name: "smallcase", image: "media/images/smallcaseLogo.png" },
    { name: "Zerodha Fundhouse", image: "media/images/zerodhaFundhouse.png" },
    { name: "streak", image: "media/images/streakLogo.png" },
    { name: "GoldenPi", image: "media/images/goldenpiLogo.png" },
    { name: "sensibull", image: "media/images/sensibullLogo.svg" },
    { name: "Ditto", image: "media/images/dittoLogo.png" },
  ];

  const columns = [
    partners.slice(0, 2),
    partners.slice(2, 4),
    partners.slice(4, 6),
  ];

  return (
    <div className="container py-5">
      <div className="row text-center">
        <p className="p-4 fs-5 text-secondary">
          Want to know more about our technology stack? Check out the
          <a href="https://zerodha.tech/blog" className="text-decoration-none">
            {" "}
            zerodha.tech blog
          </a>
        </p>

        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="p-3 fs-5 text-secondary">
          Extend your trading and experience even further with our partner
          platforms.
        </p>

        <div className="row justify-content-center align-items-stretch g-4 mt-2">
          {columns.map((column, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="d-flex flex-column gap-4">
                {column.map((partner) => (
                  <div
                    key={partner.name}
                    className="d-flex flex-column justify-content-center align-items-center border rounded-3 p-4 h-100 shadow-sm bg-light"
                    style={{ minHeight: "180px" }}
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      style={{
                        width: "150px",
                        height: "60px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                    <p className="text-small text-muted mt-3 mb-0">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-muted mb-3">
            Discover tools and services designed to support smarter investing
            and seamless trading.
          </p>
          <button className="btn btn-primary px-4 py-2 rounded-pill">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
