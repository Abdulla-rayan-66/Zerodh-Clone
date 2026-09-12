import React from "react";

function Education() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="Education" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education platform in the
            world covers everything you need to know about the stock market.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p>
            Trading Q&A, the most active trading and investment community on the
            internet for all your market-related queries.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
