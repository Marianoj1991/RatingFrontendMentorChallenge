import React, { useContext } from "react";
import { RatingComponent } from "./components/RatingComponent";

import "./app.css";
import { RateContext } from "./context/RateContext";
import { RatedComponent } from "./components/RatedComponent";

export const App = () => {

  const { showRate } = useContext(RateContext);

  return (
    <div className="App">
      {
        (showRate) 
        ? <RatedComponent />
        : <RatingComponent />
      }
    </div>
  );
};
