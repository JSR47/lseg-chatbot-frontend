import React from "react";

export const SelectedExchange = ({ topStocks }) => {
  return (
    <div>
      <span
        class="badge"
        style={{
          position: "absolute",
          top: "400px",
          right: "100px",
          padding: "10px",
          backgroundColor: " #d6dbdf ",
          color: "black",
          fontSize: "15px",
          fontWeight: "normal",
        }}
      >
        {topStocks.stockExchange}
      </span>
    </div>
  );
};
