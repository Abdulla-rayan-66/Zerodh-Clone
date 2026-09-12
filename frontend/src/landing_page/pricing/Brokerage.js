import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "1.5" }}
            className="text-muted"
          >
            <li>
              <p>
                Call &amp; Trade and RMS auto-square-off: Additional charges of
                ₹50 + GST per order.
              </p>
            </li>

            <li>
              <p>Digital contract notes will be sent via e-mail.</p>
            </li>

            <li>
              <p>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </p>
            </li>

            <li>
              <p>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </p>
            </li>

            <li>
              <p>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </p>
            </li>

            <li>
              <p>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
