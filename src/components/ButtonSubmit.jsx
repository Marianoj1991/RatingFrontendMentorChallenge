import { useContext } from "react";
import { RateContext } from "../context/RateContext";
import "../styles/buttonSubmit.css";

export const ButtonSubmit = () => {

  const { onHandleRate } = useContext(RateContext);


  return (
    <button onClick={() => onHandleRate()} className="button-submit">
      SUBMIT
    </button>
  );
};
