import React, { useEffect, useState } from "react";
import axios from "axios";

export const GetStockPrice = ({ stockPrice }) => {
  const [topStockPrice, setTopStockPrice] = useState([]);

  useEffect(() => {
    if (stockPrice && stockPrice.stockName) {
      const stockExchangeName = stockPrice.stockName;
      if (stockExchangeName) {
        loadStockPrice(stockExchangeName);
      }
    }
  }, [stockPrice]);
  const loadStockPrice = async (stockExchangeName) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/v1/stock-exchanges/stocks/${stockExchangeName}/price`
      );
      console.log("Fetched stocks:", result.data);
      setTopStockPrice(result.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };


  const refreshPage = (event) => {
    event.preventDefault();
    window.location.reload();
  };


  return (
    <div className="container" style={{
        width: "50rem",
        position: "absolute",
        top: "850px",
        left: "90px",
      }}>
      <div
        class="card"

      >
        <div class="card-body" style={{
              backgroundColor: "#c7f6f4 ",}}>
          <p
            class="card-text"
            style={{
              backgroundColor: "#c7f6f4 ",
              color: "black",
              fontSize: "18px",
              fontWeight: "normal",
              display: "flex"
            }}
          >
            {topStockPrice.price}
          </p>
          <a href="#" class="btn btn-warning" onClick={refreshPage}>
            Main Menu
          </a>
        </div>
      </div>
    </div>
  );
};
