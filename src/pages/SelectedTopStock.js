import React from "react";

export const SelectedTopStock = ({ stockPrice }) => {
  return (
    <div>
      <span
        class="badge"
        style={{
          position: "absolute",
          top: "790px",
          right: "100px",
          padding: "10px",
          backgroundColor: " #d6dbdf ",
          color: "black",
          fontSize: "15px",
          fontWeight: "normal",
        }}
      >
        {stockPrice.stockName}
      </span>
    </div>
  );
};
