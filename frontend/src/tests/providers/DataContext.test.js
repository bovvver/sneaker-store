import React from "react";
import { render, waitForElement } from "@testing-library/react";
import axios from "axios";
import DataContext, { useData } from "../../providers/DataContext";
import { BrowserRouter as Router } from "react-router-dom";


describe("DataContext", () => {
  test("should check if data fetches and update the state", () => {
    jest.mock("axios");

    const mockCall = () => {
      axios.get.mockResolvedValueOnce({
        data: [
          {
            id: 1,
            name: "Sneaker 1",
            price: 100,
          },
          {
            id: 2,
            name: "Sneaker 2",
            price: 200,
          },
        ],
      });
    };

    let context;
    const TestComponent = () => {
      context = useData();
      const { dataRef, isDataFetched } = context;

      mockCall();

      return (
        <div>
          {isDataFetched ? (
            <ul>
              {dataRef.current.map((el) => (
                <li key={el.id}>
                  {el.name}, ${el.price}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    };

    render(
      <Router>
        <DataContext>
          <TestComponent />
        </DataContext>
      </Router>
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
