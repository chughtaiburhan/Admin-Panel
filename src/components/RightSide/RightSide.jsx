import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div style={{ marginTop: "2.5rem" }}> {/* Add margin to create space */}
        <hr />
        <h3 style={{ marginBottom: "1rem" }}>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
