import React from "react";

function NotFound() {
  return (
    <section className="container mt-5 py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="mb-3"> 404 Page Not Found</h1>
          <p className="text-muted fs-5 mb-4">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
