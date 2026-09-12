import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center fs-3">People</h1>
      </div>
      <div className="row p-5 mt-5 mb-5 text-center fs-5 text-muted">
        <div className="col px-4 py-3">
          <img
            className="mb-5"
            src="media\images\nithinKamath.jpg"
            alt="Nitin"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4>Abdulla Rayan</h4>
          <h6>Co-Founder & CEO</h6>
        </div>
        <div className="col px-4 py-3">
          <p className="text-start text-muted mb-4">
            The author is a creative storyteller who writes with clarity and
            purpose. Their work explores human experiences, everyday challenges,
            and the quiet victories that shape personal growth.
          </p>
          <p className="text-start text-muted mb-4">
            With a deep interest in culture and technology, they bring
            thoughtful perspectives to each page and inspire readers to reflect
            more deeply about the world around them.
          </p>
          <p className="text-start text-muted mb-0">
            Through every piece, the author seeks to connect and encourage,
            leaving a lasting impression that invites empathy and genuine
            curiosity.
          </p>
          <p className="text-start text-muted mt-3 mb-0">
            Content on &nbsp;
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            <span className="mx-2">|</span>
            <a href="/trading" style={{ textDecoration: "none" }}>
              TradingQ&A
            </a>
            <span className="mx-2">|</span>
            <a href="https://twitter.com" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
