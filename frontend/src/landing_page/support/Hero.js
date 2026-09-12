import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5 mt-5 mb-5" id="supportWrapper">
        <h4>Support portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-5 mt-5 mx-5 mb-5">
        <div className="col mx-5">
          <h2>Search for an answer or browse help topics to create a ticket</h2>
          <input placeholder="Eg. How do i active F&O" />
          <br />
          <a href="">Track account opening </a>&nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col mx-5">
          <h2>Featured</h2>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting -January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
