import React, { useEffect, useState } from "react";
import axios from "axios";
import { SelectedTopStock } from "../pages/SelectedTopStock";
import { GetStockPrice } from "./GetStockPrice";

const getStockExchangeId = (exchangeName) => {
  switch (exchangeName) {
    case "London Stock Exchange":
      return "1";
    case "New York Stock Exchange":
      return "2";
    case "Nasdaq":
      return "3";
    default:
      return null;
  }
};

export const GetStocks = ({ topStocks }) => {
  const [stockPrice, setStockPrice] = useState(null);
  const [topStock, setTopStock] = useState([]);

  useEffect(() => {
    if (topStocks && topStocks.stockExchange) {
      const stockExchangeId = getStockExchangeId(topStocks.stockExchange);
      if (stockExchangeId) {
        loadStocks(stockExchangeId);
      }
    }
  }, [topStocks]);
  const loadStocks = async (exchangeId) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/v1/stock-exchanges/${exchangeId}/stocks`
      );
      console.log("Fetched stocks:", result.data);
      setTopStock(result.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };
  const handleRowClick = (stock) => {
    console.log("Stock clicked:", stock);
    setStockPrice(stock);
  };

  return (
    <div className="container">
      <div
        className="py-4"
        style={{ position: "absolute", top: "470px", left: "100px" }}
      >
        <table
          className="table border shadow"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <thead>
            <tr>
              <th
                style={{ backgroundColor: "#c7f6f4 ", color: "#c7f6f4" }}
              ></th>
              <th
                style={{
                  backgroundColor: "#c7f6f4 ",
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "normal",
                }}
              >
                Please select a Stock.
              </th>
            </tr>
          </thead>
          <tbody>
            {topStock.map((stock, index) => (
              <tr key={index} onClick={() => handleRowClick(stock)}>
                <th scope="row">{index + 1}</th>
                {/* <td>{stock.stockExchange}</td> */}
                <td>
                  <span className="btn btn-warning">{stock.stockName}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {stockPrice && <SelectedTopStock stockPrice={stockPrice} />}
      {stockPrice && <GetStockPrice stockPrice={stockPrice} />}
    </div>
  );
};
