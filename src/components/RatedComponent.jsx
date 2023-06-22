import { useContext } from "react";
import "../styles/ratedComponent.css";
import { RateContext } from "../context/RateContext";

export const RatedComponent = () => {
  const { rate } = useContext(RateContext);

  return (
    <div className="container-rated">
      <div className="logo">
        <img src="../../public/illustration-thank-you.svg" alt="" />
      </div>
      <p className="text-rank">You selected {rate} out of 5</p>
      <h3>Thank you!</h3>
      <p className="text-thanks">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </div>
  );
};
