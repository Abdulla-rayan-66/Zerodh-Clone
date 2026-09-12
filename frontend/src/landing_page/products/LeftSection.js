import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ml-3">
        <div className="col p-3">
          <img src={imageURL} className="ml-3" />
        </div>
        <div className="col mt-5 p-3">
          <h1 className="mb-3">{productName}</h1>
          <p className="fs-5">{productDescription}</p>
          <div className="d-flex gap-3 mb-3 p-1">
            <a
              href={tryDemo}
              className="fs-5"
              style={{ textDecoration: "none" }}
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              className="fs-5"
              style={{ textDecoration: "none" }}
            >
              Learn More
            </a>
          </div>
          <div className="d-flex gap-3 ">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ textDecoration: "none" }}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
