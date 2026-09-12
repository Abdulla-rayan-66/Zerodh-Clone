import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Free equity investments and flat ₹20 traday and F&0 trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free - ₹0
            brokerage.{" "}
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&o trades</h1>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades accross equity,currency, and commodity trades
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual funds are absolutely free - ₹20 0 commission & DP
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
