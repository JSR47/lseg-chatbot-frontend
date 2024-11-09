import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Button.css";
import { SelectedExchange } from "./SelectedExchange";
import { GetStocks } from "../stocks/GetStocks";
export default function Home() {
  const [topStocks, setTopStocks] = useState(null);

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/v1/stock-exchanges/get-all-stocks"
      );
      console.log(result);
      setStocks(result.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

  const handleRowClick = (stock) => {
    console.log("Stock clicked:", stock);
    setTopStocks(stock);
  };

  return (
    <div className="container">
      <div
        className="py-4"
        style={{ position: "absolute", top: "150px", left: "100px" }}
      >
        <table
          className="table border shadow"
          style={{ width: "100%", maxWidth: "1500px" }}
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
                Please select a Stock Exchange.
              </th>
            </tr>
          </thead>
          <tbody>
            {stocks && stocks.length > 0 ? (
              stocks.map((stock, index) => (
                <tr key={index} onClick={() => handleRowClick(stock)}>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{stock.stockExchange}</td> */}
                  <td>
                    <span className="btn btn-warning">
                      {stock.stockExchange}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center text-danger">
                  No stocks available or failed to load stocks, check if the backend is running.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {topStocks && <SelectedExchange topStocks={topStocks} />}
      {topStocks && <GetStocks topStocks={topStocks} />}
    </div>
  );
}
